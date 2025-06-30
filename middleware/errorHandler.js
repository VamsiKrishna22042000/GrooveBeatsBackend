// import errorConstants from "../constants/errorConstants.js";

// const errorHandler = (err, req, res, next) => {
//   const statusCode = req.status
//     ? req.status
//     : errorConstants.INTERNAL_SERVER_ERROR;

//   console.log(req.status);

//   switch (statusCode) {
//     case statusCode === errorConstants.VAIDATION_ERROR:
//       res.status(errorConstants.VAIDATION_ERROR);
//       res.json({
//         message: `Bad Request ${errorConstants.VAIDATION_ERROR}`,
//         stack: err.stackTrace,
//       });
//       break;
//     case statusCode === errorConstants.FORBIDDEN:
//       res.status(errorConstants.FORBIDDEN);
//       res.json({
//         message: `Request Forbidden ${errorConstants.FORBIDDEN}`,
//         stack: err.stackTrace,
//       });
//       break;
//     case statusCode === errorConstants.UN_AUTHORIZED:
//       res.status(errorConstants.UN_AUTHORIZED);
//       res.json({
//         message: `Request Un Authorized ${errorConstants.UN_AUTHORIZED}`,
//         stack: err.stackTrace,
//       });
//       break;
//     case statusCode === errorConstants.INTERNAL_SERVER_ERROR:
//       res.status(errorConstants.INTERNAL_SERVER_ERROR);
//       res.json({
//         message: `Internal Server Error ${errorConstants.INTERNAL_SERVER_ERROR}`,
//         stack: err.stackTrace,
//       });
//       break;
//     case statusCode === errorConstants.NOT_FOUND:
//       res.status(errorConstants.NOT_FOUND);
//       res.json({
//         message: `Not Found ${errorConstants.NOT_FOUND}`,
//         stack: err.stackTrace,
//       });
//       break;
//     default:
//       res.status(200);
//       res.json({
//         message: "No Error",
//       });
//       break;
//   }
// };

// export default errorHandler;

import errorConstants from "../constants/errorConstants.js";

const errorHandler = (err, req, res, next) => {
  const statusCode =
    res.statusCode || err.status || errorConstants.INTERNAL_SERVER_ERROR;

  switch (statusCode) {
    case errorConstants.VALIDATION_ERROR:
      res.status(errorConstants.VALIDATION_ERROR);
      res.json({
        message: `Bad Request ${errorConstants.VALIDATION_ERROR}`,
        stack: err.stack,
      });
      break;
    case errorConstants.FORBIDDEN:
      res.status(errorConstants.FORBIDDEN);
      res.json({
        message: `Request Forbidden ${errorConstants.FORBIDDEN}`,
        stack: err.stack,
      });
      break;
    case errorConstants.UN_AUTHORIZED:
      res.status(errorConstants.UN_AUTHORIZED);
      res.json({
        message: `Request Un Authorized ${errorConstants.UN_AUTHORIZED}`,
        stack: err.stack,
      });
      break;
    case errorConstants.INTERNAL_SERVER_ERROR:
      res.status(errorConstants.INTERNAL_SERVER_ERROR);
      res.json({
        message: `Internal Server Error ${errorConstants.INTERNAL_SERVER_ERROR}`,
        stack: err.stack,
      });
      break;
    case errorConstants.NOT_FOUND:
      res.status(errorConstants.NOT_FOUND);
      res.json({
        message: `Not Found ${errorConstants.NOT_FOUND}`,
        stack: err.stack,
      });
      break;
    default:
      res.status(200);
      res.json({
        message: "No Error",
      });
      break;
  }
};

export default errorHandler;
