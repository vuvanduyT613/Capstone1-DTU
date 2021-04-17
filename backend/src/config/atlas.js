import mongoose from 'mongoose';

async function config() {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@database.6gsdc.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
      },
      () => {
        console.log('connect database success');
      }
    );
  } catch (err) {
    console.log('connect database fail');
  }
}

export { config };
