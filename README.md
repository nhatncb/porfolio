
## Commit message

1. Compulsory follow format **`type(scope): jira-issue Message`**
2. **`type`**: One of the types **`['chore', 'feat', 'fix', 'perf', 'refactor']`**
3. **`(scope)`**: Optional, accept all characters. If you don't fill in the **`scope`**, remove the sign **`( )`**.
4. **`jira-issue`**: MAT-XXXX, if no tags, use PAN-000, you can declare multiple tags in the same commit separated by spaces.
5. **`Message`**: Mandatory capital letter at the beginning of sentence. You can reuse the words in the **`type`**.
6. Between **`type(scope)`** and **`jira-issue`** must have a **`:`** and a space.
7. There must be a space between **`jira-issue`** and **`Message`**.
8. **Special**: To make the commit not appear in Changelog, add tag **`[skipclog]`** at the end of **`Message`** Ex: “fix(scope): PAN-000 Fix something [skipclog]”

## This message will be deleted in future. This is just a note.

## About authentication
I have added dummy authentication in `src/mocks/handlers.js`. Just return sample token and dummy admin user data.
 - id: admin@admin.com
 - password: password123

## About example data
Generate random data and save as json file. ID is number but they skip around.

## About Example list page
What I have done.
0. Create dummy list endpoint in `src/mocks/handlers.js`.
1. Create models in `src/models`. Add routes for get detail page endpoint. And add type also.
2. Create container in `src/containers`. List page should be inside `/List` directory. Named index.tsx.
3. Create page component. Named `ExampleList`.
4. To fetch from API(dummy data), use custom hook `src/hooks/useList.ts`. 
5. Add `PageContainer` from Ant design pro-layout and add `CustomTable` from our `src/components/CustomTable/index.tsx`
6. For the column, use `ProColumns` from Ant design pro-table and create columns that I want to show in ExampleList page. CustomeTable is based on Ant design pro-table.
7. Pass `list, isFetching, pagination` from `useList` hooks and pass it to CustomTable component.
8. Filter and Sorter is supported by Ant design pro-table.
9. Create schema using `yup` in `src/containers/Example/List/searchSchema.ts`. This is just for validation for keyword object.
10. Add `src/components/SearchWrapper` and `src/components/Form/TextInput` in PageContainer at list page.

## About Example detail page
What I have done.
0. Create dummy detail endpoint in `src/mocks/handlers.js`.
1. Add detail function in models `src/models/example/index.ts`
2. Create Detail container in `src/containers/Example/Detail/index.tsx`
3. Use `CustomDescription`, and it's very nice!
4. Remove fields parts outside of Detail components. I did same as List page but it's kind of redundant? I'm not sure.
5. Add Detail components in `src/router/adminRoutes.tsx`
6. Wrap with Suspense component if you want to modify your suspense style.

## About Example modal detail page
What I have done.
1. Create custom hook for using modal detail page in Detail directory. `src/containers/Example/Detail/hooks/useExampleModal.tsx`.
2. Simply call this hooks from List page and use it.

## About Example edit page
0. Create mock server for update endpoint. Only return success message. No data will be changed in this endpoint. `src/mocks/handlers.js`.
1. Add update function in model `src/models/example/index.ts`
1. Create InputForm component directory. `src/containers/Example/ExampleInputForm`
2. Create schema. This is schema for all the input fields. `src/containers/Example/ExampleInputForm/schema.ts`
3. Create Example form component `src/containers/Example/ExampleInputForm/index.tsx`.
4. Create Edit component directory and create index.tsx `src/containers/Example/Edit/index.tsx`
5. Add Edit component route into `src/router/adminRoutes.tsx`.
6. Add Link button in `src/containers/Example/Detail/index.tsx`.

## About Example edit page with Modal
1. Create hooks for edit with modal in `src/containers/Example/Edit/hooks/useExampleModalEdit.tsx`.
2. Call from Detail page