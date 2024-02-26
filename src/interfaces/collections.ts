export type CollectionCatalog =
    | 'address'
    | 'adminNotifications'
    | 'appSettings'
    | 'appSettings'
    | 'cities'
    | 'cocinas'
    | 'countries'
    | 'domiService'
    | 'histories'
    | 'holidays'
    | 'insumos'
    | 'notificationsSaved'
    | 'paymentMethods'
    | 'plans'
    | 'products'
    | 'programming'
    | 'recipes'
    | 'states'
    | 'statistics'
    | 'support'
    | 'termsConditions';

export type CollectionUserData =
    | 'orders'
    | 'users'
    | 'payments'
    | 'walletHistory'
    | 'rateQuchara'
    | 'codeBonus'
    | 'validationSMS'
    | 'news'
    | 'addressPostulations';

export type Collection = CollectionCatalog | CollectionUserData;
