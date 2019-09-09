module.exports = `
    enum EncashmentStatus {
        PENDING
        SUCCESS
        FAILED
    }

    enum AccountStatus {
        UNVERIFIED
        VERIFIED
        DEACTIVATED
    }

    enum AccountType {
        PERSONAL
        MERCHANT
        ENTERPRISE
    }

    enum TransferType {
        TRANSFER
        ENCASHMENT
    }
    
    enum Gender {
        MALE
        FEMALE
    }

    enum PaginationType {
        CURSOR
        OFFSET
    }

    
`