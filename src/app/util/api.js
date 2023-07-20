export async function callApi(endpoint, method = '', data = null) {
  const baseUrl = 'http://localhost:3001/api/v1';
  const url = baseUrl + endpoint;

  const headers = {
    'Content-Type': 'application/json',
  };

  const options = {
    method: method || 'GET',
    headers,
  };

  if (data) {
    options.body = JSON.stringify(data);
  }

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const json = await response.json();
    return json;
  } catch (error) {
    console.error('Error calling API:', error);
    throw error;
  }
};