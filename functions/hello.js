exports.handler = async function(event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      name: 'SORLROS',
      age: 29,
      email: 'sorlros2047@gmail.com'
    })
  }
}