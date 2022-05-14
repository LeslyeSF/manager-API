export default interface AppError {
  type:
    | 'not_found'
    | 'bad_request'
    | 'conflict'
    | 'unauthorized'
    | 'unprocessable_entity';
}
