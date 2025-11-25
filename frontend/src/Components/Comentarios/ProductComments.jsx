import React, { useState, useEffect } from 'react';
import './ProductComments.css';

const ProductComments = ({ productId, productName }) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    author_name: '',
    author_email: '',
    content: '',
    rating: 5
  });
  const [error, setError] = useState('');

  // Configuração centralizada da API
  const API_BASE_URL = 'http://localhost:3001'; // ou process.env.REACT_APP_API_URL

  // Buscar comentários - CORRIGIDO
const fetchComments = async () => {
  try {
    setLoading(true);
    setError('');
    
    console.log('🔍 Iniciando busca de comentários...');
    
    // Tente diferentes URLs
    const possibleURLs = [
      `http://localhost:3001/api/products/${productId}/comments`,
      `http://127.0.0.1:3001/api/products/${productId}/comments`,
      `/api/products/${productId}/comments` // URL relativa
    ];
    
    let lastError = null;
    
    for (const API_URL of possibleURLs) {
      try {
        console.log('🔄 Tentando URL:', API_URL);
        
        const response = await fetch(API_URL, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          mode: 'cors'
        });
        
        if (response.ok) {
          const result = await response.json();
          console.log('✅ Sucesso com URL:', API_URL);
          
          if (result.success) {
            setComments(result.data);
            setError('');
            return; // Sai da função se deu certo
          }
        }
      } catch (err) {
        console.log(`❌ Falha com ${API_URL}:`, err.message);
        lastError = err;
        continue; // Tenta a próxima URL
      }
    }
    
    // Se todas as URLs falharem
    throw lastError || new Error('Todas as tentativas de conexão falharam');
      
  } catch (err) {
    console.error('❌ Erro final:', err);
    setError(`
      Erro de conexão com o backend. 
      
      Verifique:
      1. ✅ Backend rodando: cd backend && npm run dev
      2. ✅ Porta 3001 está livre
      3. ✅ CORS habilitado no backend
      4. ✅ Teste manual: http://localhost:3001/api/health
      
      Erro técnico: ${err.message}
    `);
  } finally {
    setLoading(false);
  }
};
  useEffect(() => {
    if (productId) {
      fetchComments();
    }
  }, [productId]);

  // Enviar comentário - CORRIGIDO
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      console.log('📤 Enviando comentário:', formData);
      
      const API_URL = `${API_BASE_URL}/api/products/${productId}/comments`;
      console.log('📡 URL do POST:', API_URL);
      
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          product_id: parseInt(productId)
        })
        // Adicione credentials se necessário
        // credentials: 'include'
      });

      console.log('📨 Status do POST:', response.status);
      
      if (!response.ok) {
        const errorText = await response.text();
        console.error('❌ Resposta de erro:', errorText);
        throw new Error(`Erro HTTP: ${response.status} - ${response.statusText}`);
      }

      const result = await response.json();
      console.log('📊 Resposta do POST:', result);

      if (result.success) {
        alert('✅ Comentário enviado para aprovação!');
        setFormData({
          author_name: '',
          author_email: '',
          content: '',
          rating: 5
        });
        setShowForm(false);
        fetchComments(); // Recarrega os comentários
      } else {
        setError(result.message || 'Erro ao enviar comentário');
      }
    } catch (err) {
      console.error('❌ Erro detalhado ao enviar comentário:', err);
      setError(`Erro de conexão: ${err.message}. Verifique se o backend está rodando.`);
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const StarRating = ({ rating, onChange, readonly = false }) => {
    return (
      <div className="star-rating">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            className={`star ${star <= rating ? 'active' : ''} ${readonly ? 'readonly' : ''}`}
            onClick={() => !readonly && onChange({ target: { name: 'rating', value: star } })}
            disabled={readonly}
          >
            ★
          </button>
        ))}
      </div>
    );
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('pt-BR');
  };

  if (loading) {
    return (
      <div className="product-comments">
        <div className="loading">Carregando avaliações...</div>
      </div>
    );
  }

  return (
    <div className="product-comments">
      <div className="comments-header">
        <h3>Avaliações sobre {productName} ({comments.length})</h3>
        <button 
          className="btn-primary"
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? 'Cancelar' : 'Escrever Avaliação'}
        </button>
      </div>

      {error && (
        <div className="error-message">
          ⚠️ {error}
          <div style={{ marginTop: '10px', fontSize: '0.9rem' }}>
            <strong>Solução:</strong>
            <br />
            1. Certifique-se que o backend está rodando
            <br />
            2. Execute: <code>cd backend && npm run dev</code>
            <br />
            3. Teste: <a href="http://localhost:3001/api/health" target="_blank" rel="noopener noreferrer">
              http://localhost:3001/api/health
            </a>
          </div>
        </div>
      )}

      {/* Formulário de comentário */}
      {showForm && (
        <form className="comment-form" onSubmit={handleSubmit}>
          <h4>Deixe sua avaliação</h4>
          
          <div className="form-group">
            <label>Sua Avaliação:</label>
            <StarRating 
              rating={parseInt(formData.rating)} 
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <textarea
              name="content"
              placeholder="Conte sua experiência com o produto... (mínimo 10 caracteres)"
              value={formData.content}
              onChange={handleInputChange}
              required
              minLength="10"
              rows="4"
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <input
                type="text"
                name="author_name"
                placeholder="Seu nome"
                value={formData.author_name}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="author_email"
                placeholder="Seu e-mail"
                value={formData.author_email}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <button type="submit" className="btn-submit">
            Enviar Avaliação
          </button>
        </form>
      )}

      {/* Lista de comentários */}
      <div className="comments-list">
        {comments.length === 0 && !error ? (
          <p className="no-comments">Seja o primeiro a avaliar este produto!</p>
        ) : (
          comments.map((comment) => (
            <CommentItem key={comment.id} comment={comment} />
          ))
        )}
      </div>
    </div>
  );
};

// Componente CommentItem (mantido igual)
const CommentItem = ({ comment }) => {
  const [showReplies, setShowReplies] = useState(false);

  return (
    <div className={`comment-item ${comment.is_verified_purchase ? 'verified' : ''}`}>
      <div className="comment-header">
        <div className="comment-author">
          <strong>{comment.author_name}</strong>
          {comment.is_verified_purchase && (
            <span className="verified-badge">✓ Compra Verificada</span>
          )}
        </div>
        <div className="comment-meta">
          <span className="comment-date">
            {formatDate(comment.createdAt)}
          </span>
          <div className="comment-rating">
            {'★'.repeat(comment.rating)}{'☆'.repeat(5 - comment.rating)}
          </div>
        </div>
      </div>

      <div className="comment-content">
        <p>{comment.content}</p>
      </div>

      {comment.replies && comment.replies.length > 0 && (
        <div className="comment-replies">
          <button 
            className="show-replies-btn"
            onClick={() => setShowReplies(!showReplies)}
          >
            {showReplies ? 'Ocultar' : 'Ver'} {comment.replies.length} resposta(s)
          </button>

          {showReplies && (
            <div className="replies-list">
              {comment.replies.map((reply) => (
                <div key={reply.id} className="reply-item">
                  <div className="reply-header">
                    <strong>{reply.author_name}</strong>
                    <span className="reply-date">
                      {formatDate(reply.createdAt)}
                    </span>
                  </div>
                  <p>{reply.content}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ProductComments;