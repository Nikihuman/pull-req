import "dotenv/config";
import { IEnvInterfaces } from "./interfaces/env-arrays.interface";
import { RandomValues } from "./random-values/random-values.class";

function bootstrap() {
  const env = process.env.ARRAY_OF_NUMBERS;

  if (!env) {
    throw new Error(`No such env`);
  }

  try {
    const { first_array, second_array }: IEnvInterfaces = JSON.parse(env);

    const randomValueFirst = new RandomValues({
      from: first_array[0],
      to: first_array[1],
    }).getRandomValue();

    const randomValueSecond = new RandomValues({
      from: second_array[0],
      to: second_array[1],
    }).getRandomValue();

    console.log(`First random value: ${randomValueFirst}`);
    console.log(`Second random value: ${randomValueSecond}`);
  } catch (error) {
    console.log(`Error ${error}`);
  }
}

bootstrap();
