import { Request, Response, NextFunction } from "express";

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // logging the error for debugging purposes
  //   console.error(err.stack);
  //   console.error(err.message);

  // check if headers are already sent
  //   if (res.headersSent) {
  //     return next(err); // Pass the error to the next error handler
  //   }
  console.log("in error handling middleware");

  res.status(500).json({
    error: "Internal Server Error",
    message: err.message,
  });
};
