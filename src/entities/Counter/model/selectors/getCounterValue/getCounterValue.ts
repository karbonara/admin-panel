import { createSelector } from "@reduxjs/toolkit";
import { getCounter } from "../getCounter/getCounter";
import { CounterSchema } from "../../types/counterSchema";

// Функция, которая возвращает значение счетчика
export const getCounterValue = createSelector(
  // Первый аргумент - селектор, который возвращает счетчик
  getCounter,
  // Второй аргумент - функция, которая принимает счетчик и возвращает его значение
  (counter: CounterSchema) => counter.value
)