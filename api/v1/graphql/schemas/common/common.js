module.exports = `
    type PageInfo {
        hasNextPage: Boolean
        endCursor: String
    }

    type Response {
        success: Boolean!
        message: String!
        data: String
    }

    type MutationResponse {
        success: Int!
        message: String!
    }

    type PatchResponse {
        status: Int
        message: String
    }

    type Paging {
        offset: Offset
        cursor: Cursor
    }

    type Offset {
        page: Int
        recordCount: Int
        pageCount: Int
        ceiling: Int
    }

    type Cursor {
        endCursor: Int
        hasNextPage: Boolean
    }

    input pagingData {
        pagination: PaginationType
        offset: offsetData
        cursor: cursorData
    }

    input offsetData {
        page: Int
        count: Int
        ceiling: Int
    }

    input cursorData {
        count: Int
        cursor: Int
    }
`