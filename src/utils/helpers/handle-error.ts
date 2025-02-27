// import { errorToast } from '@utils/helpers';
// import { AxiosError } from 'axios';

// export const handleError = (errorData: AxiosError, shouldThrowError?: boolean): void => {
//   if (errorData.response) {
//     const error = errorData.response.data as any;
//     errorToast({ message: error?.message });
//     if (shouldThrowError) throw Error(error?.message);
//   } else if (errorData.request) {
//     errorToast({ message: 'Network error. Refresh the page.' });
//   } else {
//     errorToast({ message: 'Something went wrong. Refresh the page.' });
//   }
// };

import { AxiosError } from 'axios';

export const handleError = (errorData: AxiosError, shouldThrowError?: boolean): void => {
  if (errorData.response) {
    const error = errorData.response.data as any;
    const errorMessage = error?.message || 'An error occurred.';

    if (shouldThrowError) {
      throw new Error(errorMessage); // Ensures ErrorBoundary catches it
    }
  } else if (errorData.request) {
    const networkErrorMessage = 'Network error. Refresh the page.';

    if (shouldThrowError) {
      throw new Error(networkErrorMessage); // Ensures ErrorBoundary catches it
    }
  } else {
    const unknownErrorMessage = 'Something went wrong. Refresh the page.';

    if (shouldThrowError) {
      throw new Error(unknownErrorMessage); // Ensures ErrorBoundary catches it
    }
  }
};

