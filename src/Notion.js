const axios = require('axios');

exports.handler = async function (event, context) {
  try {
    const NOTION_SECRET = 'secret_GNQdBueQ0XrGgzv1h8mbfSiynWQ3sQ8ZANKsPp1gx7F'; // Replace withsecret_GNQdBueQ0XrGgzv1h8mbfSiynWQ3sQ8ZANKsPp1gx7F your Notion secret
    const DATABASE_ID = '538a936b78e14d5d8dd1478875534a4d'; // Replace with your Notion database ID

    const response = await axios.post(
      `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
      {},
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${NOTION_SECRET}`,
          'Notion-Version': '2023-08-01', // Check for the latest Notion API version
        },
      }
    );

    const data = response.data.results;

    const htmlTable = `<table>
      <thead>
        <tr>
          <th>Column 1</th>
          <th>Column 2</th>
          <!-- Add more columns as needed -->
        </tr>
      </thead>
      <tbody>
        ${data.map(item => `<tr><td>${item.properties.Column1.title[0].text.content}</td><td>${item.properties.Column2.title[0].text.content}</td></tr>`).join('')}
        <!-- Add more rows and columns as needed -->
      </tbody>
    </table>`;

    return {
      statusCode: 200,
      body: htmlTable,
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' }),
    };
  }
};