/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getVodAsset = `query GetVodAsset($id: ID!) {
  getVodAsset(id: $id) {
    id
    title
    description
    video {
      id
    }
  }
}
`;
export const listVodAssets = `query ListVodAssets(
  $filter: ModelvodAssetFilterInput
  $limit: Int
  $nextToken: String
) {
  listVodAssets(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      description
      video {
        id
      }
    }
    nextToken
  }
}
`;
export const getVideoObject = `query GetVideoObject($id: ID!) {
  getVideoObject(id: $id) {
    id
  }
}
`;
export const listVideoObjects = `query ListVideoObjects(
  $filter: ModelvideoObjectFilterInput
  $limit: Int
  $nextToken: String
) {
  listVideoObjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
    }
    nextToken
  }
}
`;
