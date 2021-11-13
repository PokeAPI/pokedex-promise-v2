interface ListEndpointOptions {
  /** The offset to be used in the request */
  offset?: number,
  /** The limit to be used in the request */
  limit?: number,
  /** The limit of the cache in milliseconds */
  cacheLimit?: number,
}

export default ListEndpointOptions;
