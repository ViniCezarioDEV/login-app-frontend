const API_URL = 'http://localhost:8080/auth'; // URL do seu back-end

export const login = async (loginData) => {
  try {
    const response = await fetch(`${API_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginData),
    });

    if (!response.ok) {
      const error = await response.text();
      return { error };
    }

    const result = await response.json();
    return { name: result.name, token: result.token };
  } catch (error) {
    return { error: 'Erro ao fazer login. Tente novamente.' };
  }
};

export const register = async (registerData) => {
  try {
    const response = await fetch(`${API_URL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(registerData),
    });

    if (!response.ok) {
      const error = await response.text();
      return { error };
    }

    const result = await response.json();
    return { name: result.name, token: result.token };
  } catch (error) {
    return { error: 'Erro ao registrar. Tente novamente.' };
  }
};
