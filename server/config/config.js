var env = process.env.NODE_ENV || 'development';

if (env === 'development') {
    process.env.PORT = 3000;
    process.env.PROD_MONGODB = 'mongodb://mongo:27017/contact-list-mongo';
} else if (env === 'test') {
    process.env.PORT = 3000;
    process.env.PROD_MONGODB = 'mongodb://mongo:27017/contact-list-test';
}