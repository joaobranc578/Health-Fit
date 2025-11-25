import { useState, useEffect } from 'react';

export const useComments = (productId) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchComments = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch(`/api/products/${productId}/comments`);
      const result = await response.json();
      
      if (result.success) {
        setComments(result.data);
      } else {
        setError(result.message || 'Erro ao carregar comentários');
      }
    } catch (err) {
      setError('Erro de conexão');
      console.error('Erro:', err);
    } finally {
      setLoading(false);
    }
  };

  const addComment = async (commentData) => {
    try {
      const response = await fetch(`/api/products/${productId}/comments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(commentData)
      });

      const result = await response.json();
      
      if (result.success) {
        await fetchComments(); // Recarregar comentários
        return result;
      } else {
        throw new Error(result.message || 'Erro ao enviar comentário');
      }
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    if (productId) {
      fetchComments();
    }
  }, [productId]);

  return {
    comments,
    loading,
    error,
    addComment,
    refetch: fetchComments
  };
};