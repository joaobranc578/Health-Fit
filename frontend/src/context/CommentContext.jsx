import React, { createContext, useContext, useState } from 'react';

const CommentContext = createContext();

export const useComments = () => {
  const context = useContext(CommentContext);
  if (!context) {
    throw new Error('useComments deve ser usado dentro de CommentProvider');
  }
  return context;
};

export const CommentProvider = ({ children }) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);

  // Buscar comentários de um produto
  const fetchComments = async (productId) => {
    try {
      setLoading(true);
      const response = await fetch(`/api/products/${productId}/comments`);
      const result = await response.json();
      
      if (result.success) {
        setComments(result.data);
        return result.data;
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      console.error('Erro ao buscar comentários:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Adicionar novo comentário
  const addComment = async (productId, commentData) => {
    try {
      const response = await fetch(`/api/products/${productId}/comments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...commentData,
          product_id: parseInt(productId)
        })
      });

      const result = await response.json();
      
      if (result.success) {
        // Recarregar comentários após adicionar
        await fetchComments(productId);
        return result;
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      console.error('Erro ao adicionar comentário:', error);
      throw error;
    }
  };

  const value = {
    comments,
    loading,
    fetchComments,
    addComment
  };

  return (
    <CommentContext.Provider value={value}>
      {children}
    </CommentContext.Provider>
  );
};