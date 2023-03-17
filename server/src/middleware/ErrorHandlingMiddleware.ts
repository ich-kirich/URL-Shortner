import ApiError from "../error/apiError";

function ErrorHandling(err: ApiError, res) {
  if (err instanceof ApiError) {
    return res.status(err.status).json({ message: err.message });
  }
  return res.status(500).json({ message: "Unexpected error" });
}

export default ErrorHandling;
