### Issue Type
runtime issue
when the application is first loaded this error occurs: although there's a supbase key in .env.local file

### Error
Error: supabaseKey is required.
    at new SupabaseClient (rsc://React/Server/C:%5CPERSONAL%5CLMS%5C.next%5Cserver%5Cchunks%5Cssr%5C_43baadfe._.js?4:8027:33)
    at createClient (rsc://React/Server/C:%5CPERSONAL%5CLMS%5C.next%5Cserver%5Cchunks%5Cssr%5C_43baadfe._.js?5:8232:12)
    at createSupabaseClient (rsc://React/Server/C:%5CPERSONAL%5CLMS%5C.next%5Cserver%5Cchunks%5Cssr%5C%5Broot-of-the-server%5D__784d5da9._.js?6:96:216)
    at getAllCompanions (rsc://React/Server/C:%5CPERSONAL%5CLMS%5C.next%5Cserver%5Cchunks%5Cssr%5C%5Broot-of-the-server%5D__784d5da9._.js?7:138:161)
    at Page (rsc://React/Server/C:%5CPERSONAL%5CLMS%5C.next%5Cserver%5Cchunks%5Cssr%5C%5Broot-of-the-server%5D__784d5da9._.js?8:990:189)
    at resolveErrorDev (http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_2ce9398a._.js:17582:48)
    at processFullStringRow (http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_2ce9398a._.js:17798:23)
    at processFullBinaryRow (http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_2ce9398a._.js:17786:9)
    at progress (http://localhost:3000/_next/static/chunks/node_modules_next_dist_compiled_2ce9398a._.js:17932:102)
    at InnerLayoutRouter (http://localhost:3000/_next/static/chunks/node_modules_next_dist_1a6ee436._.js:356:55)
    at OuterLayoutRouter (http://localhost:3000/_next/static/chunks/node_modules_next_dist_1a6ee436._.js:504:73)