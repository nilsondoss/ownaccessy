
// Files Imports
import * as configure from "@api/configure";
import * as API_000 from "@api/root/src/server/api/admin/analytics/GET.ts";
import * as API_001 from "@api/root/src/server/api/admin/config/GET.ts";
import * as API_002 from "@api/root/src/server/api/admin/config/POST.ts";
import * as API_003 from "@api/root/src/server/api/admin/download-project/POST.ts";
import * as API_004 from "@api/root/src/server/api/admin/payments/GET.ts";
import * as API_005 from "@api/root/src/server/api/admin/properties/GET.ts";
import * as API_006 from "@api/root/src/server/api/admin/properties/POST.ts";
import * as API_007 from "@api/root/src/server/api/admin/properties/bulk-upload/POST.ts";
import * as API_008 from "@api/root/src/server/api/admin/properties/[id]/GET.ts";
import * as API_009 from "@api/root/src/server/api/admin/properties/[id]/PUT.ts";
import * as API_010 from "@api/root/src/server/api/admin/properties/[id]/DELETE.ts";
import * as API_011 from "@api/root/src/server/api/admin/token-logs/GET.ts";
import * as API_012 from "@api/root/src/server/api/admin/token-logs/[id]/DELETE.ts";
import * as API_013 from "@api/root/src/server/api/admin/users/GET.ts";
import * as API_014 from "@api/root/src/server/api/admin/users/[userId]/PUT.ts";
import * as API_015 from "@api/root/src/server/api/auth/login/POST.ts";
import * as API_016 from "@api/root/src/server/api/auth/me/GET.ts";
import * as API_017 from "@api/root/src/server/api/auth/register/POST.ts";
import * as API_018 from "@api/root/src/server/api/commerce/create-checkout-session/POST.ts";
import * as API_019 from "@api/root/src/server/api/config/razorpay-key/GET.ts";
import * as API_020 from "@api/root/src/server/api/health/GET.ts";
import * as API_021 from "@api/root/src/server/api/payments/create-order/POST.ts";
import * as API_022 from "@api/root/src/server/api/payments/verify/POST.ts";
import * as API_023 from "@api/root/src/server/api/properties/GET.ts";
import * as API_024 from "@api/root/src/server/api/properties/search-suggestions/GET.ts";
import * as API_025 from "@api/root/src/server/api/properties/[id]/GET.ts";
import * as API_026 from "@api/root/src/server/api/properties/[id]/download/GET.ts";
import * as API_027 from "@api/root/src/server/api/properties/[id]/unlock/POST.ts";
import * as API_028 from "@api/root/src/server/api/properties/[id]/view/POST.ts";
import * as API_029 from "@api/root/src/server/api/user/favorites/GET.ts";
import * as API_030 from "@api/root/src/server/api/user/favorites/POST.ts";
import * as API_031 from "@api/root/src/server/api/user/favorites/[propertyId]/DELETE.ts";
import * as API_032 from "@api/root/src/server/api/user/profile/PUT.ts";
import * as API_033 from "@api/root/src/server/api/user/referrals/GET.ts";
import * as API_034 from "@api/root/src/server/api/user/token-transactions/GET.ts";
import * as API_035 from "@api/root/src/server/api/user/unlocked-properties/GET.ts";

// Public RESTful API Methods and Paths
// This section describes the available HTTP methods and their corresponding endpoints (paths).
// GET    /api/admin/analytics/                     src/server/api/admin/analytics/GET.ts
// GET    /api/admin/config/                        src/server/api/admin/config/GET.ts
// POST   /api/admin/config/                        src/server/api/admin/config/POST.ts
// POST   /api/admin/download-project/              src/server/api/admin/download-project/POST.ts
// GET    /api/admin/payments/                      src/server/api/admin/payments/GET.ts
// GET    /api/admin/properties/                    src/server/api/admin/properties/GET.ts
// POST   /api/admin/properties/                    src/server/api/admin/properties/POST.ts
// POST   /api/admin/properties/bulk-upload/        src/server/api/admin/properties/bulk-upload/POST.ts
// GET    /api/admin/properties/:id/                src/server/api/admin/properties/[id]/GET.ts
// PUT    /api/admin/properties/:id/                src/server/api/admin/properties/[id]/PUT.ts
// DELETE /api/admin/properties/:id/                src/server/api/admin/properties/[id]/DELETE.ts
// GET    /api/admin/token-logs/                    src/server/api/admin/token-logs/GET.ts
// DELETE /api/admin/token-logs/:id/                src/server/api/admin/token-logs/[id]/DELETE.ts
// GET    /api/admin/users/                         src/server/api/admin/users/GET.ts
// PUT    /api/admin/users/:userId/                 src/server/api/admin/users/[userId]/PUT.ts
// POST   /api/auth/login/                          src/server/api/auth/login/POST.ts
// GET    /api/auth/me/                             src/server/api/auth/me/GET.ts
// POST   /api/auth/register/                       src/server/api/auth/register/POST.ts
// POST   /api/commerce/create-checkout-session/    src/server/api/commerce/create-checkout-session/POST.ts
// GET    /api/config/razorpay-key/                 src/server/api/config/razorpay-key/GET.ts
// GET    /api/health/                              src/server/api/health/GET.ts
// POST   /api/payments/create-order/               src/server/api/payments/create-order/POST.ts
// POST   /api/payments/verify/                     src/server/api/payments/verify/POST.ts
// GET    /api/properties/                          src/server/api/properties/GET.ts
// GET    /api/properties/search-suggestions/       src/server/api/properties/search-suggestions/GET.ts
// GET    /api/properties/:id/                      src/server/api/properties/[id]/GET.ts
// GET    /api/properties/:id/download/             src/server/api/properties/[id]/download/GET.ts
// POST   /api/properties/:id/unlock/               src/server/api/properties/[id]/unlock/POST.ts
// POST   /api/properties/:id/view/                 src/server/api/properties/[id]/view/POST.ts
// GET    /api/user/favorites/                      src/server/api/user/favorites/GET.ts
// POST   /api/user/favorites/                      src/server/api/user/favorites/POST.ts
// DELETE /api/user/favorites/:propertyId/          src/server/api/user/favorites/[propertyId]/DELETE.ts
// PUT    /api/user/profile/                        src/server/api/user/profile/PUT.ts
// GET    /api/user/referrals/                      src/server/api/user/referrals/GET.ts
// GET    /api/user/token-transactions/             src/server/api/user/token-transactions/GET.ts
// GET    /api/user/unlocked-properties/            src/server/api/user/unlocked-properties/GET.ts

const internal  = [
  API_000.default  && { cb: API_000.default , method: "get"    , route: "/admin/analytics/"                  , url: "/api/admin/analytics/"                  , source: "src/server/api/admin/analytics/GET.ts"                   },
  API_001.default  && { cb: API_001.default , method: "get"    , route: "/admin/config/"                     , url: "/api/admin/config/"                     , source: "src/server/api/admin/config/GET.ts"                      },
  API_002.default  && { cb: API_002.default , method: "post"   , route: "/admin/config/"                     , url: "/api/admin/config/"                     , source: "src/server/api/admin/config/POST.ts"                     },
  API_003.default  && { cb: API_003.default , method: "post"   , route: "/admin/download-project/"           , url: "/api/admin/download-project/"           , source: "src/server/api/admin/download-project/POST.ts"           },
  API_004.default  && { cb: API_004.default , method: "get"    , route: "/admin/payments/"                   , url: "/api/admin/payments/"                   , source: "src/server/api/admin/payments/GET.ts"                    },
  API_005.default  && { cb: API_005.default , method: "get"    , route: "/admin/properties/"                 , url: "/api/admin/properties/"                 , source: "src/server/api/admin/properties/GET.ts"                  },
  API_006.default  && { cb: API_006.default , method: "post"   , route: "/admin/properties/"                 , url: "/api/admin/properties/"                 , source: "src/server/api/admin/properties/POST.ts"                 },
  API_007.default  && { cb: API_007.default , method: "post"   , route: "/admin/properties/bulk-upload/"     , url: "/api/admin/properties/bulk-upload/"     , source: "src/server/api/admin/properties/bulk-upload/POST.ts"     },
  API_008.default  && { cb: API_008.default , method: "get"    , route: "/admin/properties/:id/"             , url: "/api/admin/properties/:id/"             , source: "src/server/api/admin/properties/[id]/GET.ts"             },
  API_009.default  && { cb: API_009.default , method: "put"    , route: "/admin/properties/:id/"             , url: "/api/admin/properties/:id/"             , source: "src/server/api/admin/properties/[id]/PUT.ts"             },
  API_010.default  && { cb: API_010.default , method: "delete" , route: "/admin/properties/:id/"             , url: "/api/admin/properties/:id/"             , source: "src/server/api/admin/properties/[id]/DELETE.ts"          },
  API_011.default  && { cb: API_011.default , method: "get"    , route: "/admin/token-logs/"                 , url: "/api/admin/token-logs/"                 , source: "src/server/api/admin/token-logs/GET.ts"                  },
  API_012.default  && { cb: API_012.default , method: "delete" , route: "/admin/token-logs/:id/"             , url: "/api/admin/token-logs/:id/"             , source: "src/server/api/admin/token-logs/[id]/DELETE.ts"          },
  API_013.default  && { cb: API_013.default , method: "get"    , route: "/admin/users/"                      , url: "/api/admin/users/"                      , source: "src/server/api/admin/users/GET.ts"                       },
  API_014.default  && { cb: API_014.default , method: "put"    , route: "/admin/users/:userId/"              , url: "/api/admin/users/:userId/"              , source: "src/server/api/admin/users/[userId]/PUT.ts"              },
  API_015.default  && { cb: API_015.default , method: "post"   , route: "/auth/login/"                       , url: "/api/auth/login/"                       , source: "src/server/api/auth/login/POST.ts"                       },
  API_016.default  && { cb: API_016.default , method: "get"    , route: "/auth/me/"                          , url: "/api/auth/me/"                          , source: "src/server/api/auth/me/GET.ts"                           },
  API_017.default  && { cb: API_017.default , method: "post"   , route: "/auth/register/"                    , url: "/api/auth/register/"                    , source: "src/server/api/auth/register/POST.ts"                    },
  API_018.default  && { cb: API_018.default , method: "post"   , route: "/commerce/create-checkout-session/" , url: "/api/commerce/create-checkout-session/" , source: "src/server/api/commerce/create-checkout-session/POST.ts" },
  API_019.default  && { cb: API_019.default , method: "get"    , route: "/config/razorpay-key/"              , url: "/api/config/razorpay-key/"              , source: "src/server/api/config/razorpay-key/GET.ts"               },
  API_020.default  && { cb: API_020.default , method: "get"    , route: "/health/"                           , url: "/api/health/"                           , source: "src/server/api/health/GET.ts"                            },
  API_021.default  && { cb: API_021.default , method: "post"   , route: "/payments/create-order/"            , url: "/api/payments/create-order/"            , source: "src/server/api/payments/create-order/POST.ts"            },
  API_022.default  && { cb: API_022.default , method: "post"   , route: "/payments/verify/"                  , url: "/api/payments/verify/"                  , source: "src/server/api/payments/verify/POST.ts"                  },
  API_023.default  && { cb: API_023.default , method: "get"    , route: "/properties/"                       , url: "/api/properties/"                       , source: "src/server/api/properties/GET.ts"                        },
  API_024.default  && { cb: API_024.default , method: "get"    , route: "/properties/search-suggestions/"    , url: "/api/properties/search-suggestions/"    , source: "src/server/api/properties/search-suggestions/GET.ts"     },
  API_025.default  && { cb: API_025.default , method: "get"    , route: "/properties/:id/"                   , url: "/api/properties/:id/"                   , source: "src/server/api/properties/[id]/GET.ts"                   },
  API_026.default  && { cb: API_026.default , method: "get"    , route: "/properties/:id/download/"          , url: "/api/properties/:id/download/"          , source: "src/server/api/properties/[id]/download/GET.ts"          },
  API_027.default  && { cb: API_027.default , method: "post"   , route: "/properties/:id/unlock/"            , url: "/api/properties/:id/unlock/"            , source: "src/server/api/properties/[id]/unlock/POST.ts"           },
  API_028.default  && { cb: API_028.default , method: "post"   , route: "/properties/:id/view/"              , url: "/api/properties/:id/view/"              , source: "src/server/api/properties/[id]/view/POST.ts"             },
  API_029.default  && { cb: API_029.default , method: "get"    , route: "/user/favorites/"                   , url: "/api/user/favorites/"                   , source: "src/server/api/user/favorites/GET.ts"                    },
  API_030.default  && { cb: API_030.default , method: "post"   , route: "/user/favorites/"                   , url: "/api/user/favorites/"                   , source: "src/server/api/user/favorites/POST.ts"                   },
  API_031.default  && { cb: API_031.default , method: "delete" , route: "/user/favorites/:propertyId/"       , url: "/api/user/favorites/:propertyId/"       , source: "src/server/api/user/favorites/[propertyId]/DELETE.ts"    },
  API_032.default  && { cb: API_032.default , method: "put"    , route: "/user/profile/"                     , url: "/api/user/profile/"                     , source: "src/server/api/user/profile/PUT.ts"                      },
  API_033.default  && { cb: API_033.default , method: "get"    , route: "/user/referrals/"                   , url: "/api/user/referrals/"                   , source: "src/server/api/user/referrals/GET.ts"                    },
  API_034.default  && { cb: API_034.default , method: "get"    , route: "/user/token-transactions/"          , url: "/api/user/token-transactions/"          , source: "src/server/api/user/token-transactions/GET.ts"           },
  API_035.default  && { cb: API_035.default , method: "get"    , route: "/user/unlocked-properties/"         , url: "/api/user/unlocked-properties/"         , source: "src/server/api/user/unlocked-properties/GET.ts"          }
].filter(it => it);

export const routers = internal.map((it) => {
  const { method, route, url, source } = it;
  return { method, url, route, source };
});

export const endpoints = internal.map(
  (it) => it.method?.toUpperCase() + "\t" + it.url
);

export const applyRouters = (applyRouter) => {
  internal.forEach((it) => {
    it.cb = configure.callbackBefore?.(it.cb, it) || it.cb;
    applyRouter(it);
  });
};

