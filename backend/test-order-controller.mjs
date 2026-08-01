try {
  await import('./controllers/orderController.js');
  console.log('import ok');
} catch (error) {
  console.error(error.message);
  process.exit(1);
}
