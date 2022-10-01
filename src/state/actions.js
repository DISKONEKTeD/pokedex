
import { createAction } from '@reduxjs/toolkit';

export const getAllRequest = createAction('getAllRequest');
export const getAllSuccess = createAction('getAllSuccess');
export const getAllError = createAction('getAllError');