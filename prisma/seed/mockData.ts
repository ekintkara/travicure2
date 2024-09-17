import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const splitSql = (sql: string) => {
  return sql.split(';').filter(content => content.trim() !== '')
}

async function main() {
  const sql = `

INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('aab6d30d-8b26-42e1-81d8-651c95052d08', '1Turner_Johnston@hotmail.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=3', 'inv78901', false, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('90e94763-fd87-4ffd-99c1-f61575a006f4', '10Mekhi.Block41@hotmail.com', 'John Doe', 'https://i.imgur.com/YfJQV5z.png?id=12', 'inv67890', false, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('c411ef2a-9cfa-4ed1-aacf-0c0b224daa66', '19Lelia.Daugherty@yahoo.com', 'Michael Jordan', 'https://i.imgur.com/YfJQV5z.png?id=21', 'inv11223', false, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('4dc07904-c25d-49e2-b3b1-e53fa510995a', '28Darrell84@hotmail.com', 'John Doe', 'https://i.imgur.com/YfJQV5z.png?id=30', 'inv67890', true, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('94ce066d-a164-410a-a81a-4af1ad121241', '46Nils91@gmail.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=48', 'inv78901', true, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('ed392e4b-a6fd-47fb-9bbf-5e2f7dc7b4dc', '55Guiseppe88@yahoo.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=57', 'inv11223', true, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('566fd5d6-afc4-417d-a840-5f76ff9ca0f7', '64Elroy.Metz67@hotmail.com', 'David Brown', 'https://i.imgur.com/YfJQV5z.png?id=66', 'inv12345', false, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('00b2b53b-904e-4ee1-9230-0ea2d66035ee', '73Judson_Pouros9@hotmail.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=75', 'inv12345', false, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('bd3cb424-34f2-4b3f-b346-b73199e3d488', '82Clarabelle23@yahoo.com', 'Emily Clark', 'https://i.imgur.com/YfJQV5z.png?id=84', 'inv67890', true, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');

INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('7575bf66-647d-4742-8c85-881cdedf605f', 'k9l8m7n6o5p4q3r2s1t0', '{"calamitas":"complectus","tristis":"creo","solio":"curtus","velit":"denego","cruentus":"curriculum"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('d2ce374f-1d03-4a36-b828-e7545d8c7f16', 'z9y8x7w6v5u4t3s2r1q0', '{"ara":"vespillo","vesper":"cursim","celo":"tredecim","adsum":"aqua"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('55872156-cb80-4899-9edd-ec12c95513d0', 'm1n2o3p4q5r6s7t8u9v0', '{"allatus":"corpus","vehemens":"vulpes","demoror":"veritatis","addo":"aperiam"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('48d4f6eb-3ba6-489c-8640-84f354c0b0be', 'w1x2y3z4a5b6c7d8e9f0', '{"tollo":"utpote","velit":"sto","optio":"alii","debilito":"debitis"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('ce3d7f3b-f1a0-42b7-b772-cfd55ef28a67', 'm1n2o3p4q5r6s7t8u9v0', '{"pax":"cursus","consequatur":"optio","derideo":"benevolentia"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('9f0f9b9f-721b-45b3-afe2-a5bbc86494bf', 'z9y8x7w6v5u4t3s2r1q0', '{"validus":"quae","sumo":"assentator","suadeo":"valetudo","tepidus":"cribro"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('85ac5696-7868-4603-b9df-6dc7b861dbb1', 'w1x2y3z4a5b6c7d8e9f0', '{"cerno":"conor","eius":"vinum","adfectus":"deprimo","ater":"urbs","minima":"aqua"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('79655910-6ebc-4765-9b12-7d6d783cdd14', 'a1b2c3d4e5f6g7h8i9j0', '{"acquiro":"tero","contra":"commodi","temeritas":"voveo","dolore":"vir"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('bf91724e-ec41-4fb9-94a9-a4b289fba11d', 'k9l8m7n6o5p4q3r2s1t0', '{"vestrum":"subiungo","tibi":"theatrum","patior":"congregatio","dapifer":"tamquam","conscendo":"conservo"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('3ec11461-e080-4188-af2a-7fde568a7118', 'a1b2c3d4e5f6g7h8i9j0', '{"hic":"officia","harum":"compello","molestiae":"totam","vestigium":"administratio","labore":"contigo"}'::jsonb);

INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('02bf860b-55d5-495e-a9e3-b2093a6693b3', 'Global Solutions LLC', 'https://i.imgur.com/YfJQV5z.png?id=122');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('00df2e4a-e44e-4761-8471-bc9b38dd04ff', 'Global Solutions LLC', 'https://i.imgur.com/YfJQV5z.png?id=125');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('0814fb36-945a-4f6b-8bfa-22c9db457acc', 'Tech Innovators Inc.', 'https://i.imgur.com/YfJQV5z.png?id=128');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('8b09da2c-ce3a-4f5d-9575-032ce8b18fe3', 'NextGen Enterprises', 'https://i.imgur.com/YfJQV5z.png?id=131');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('6f386385-aac7-4048-aba3-e2f64e4cc542', 'Tech Innovators Inc.', 'https://i.imgur.com/YfJQV5z.png?id=134');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('d3e411eb-4635-4572-8e92-49e879bf2130', 'NextGen Enterprises', 'https://i.imgur.com/YfJQV5z.png?id=137');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('8dc4cf59-c13a-416e-82c0-d415cb8b1ae9', 'Pioneer Technologies', 'https://i.imgur.com/YfJQV5z.png?id=140');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('6459dc19-8a69-48e2-b05e-d65e9605d164', 'Future Vision Group', 'https://i.imgur.com/YfJQV5z.png?id=143');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('7bbba9cc-9146-4ca1-8ae8-f9a08dff7777', 'Pioneer Technologies', 'https://i.imgur.com/YfJQV5z.png?id=146');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('b3224dc8-94ca-414f-b0b2-29a624e514b1', 'NextGen Enterprises', 'https://i.imgur.com/YfJQV5z.png?id=149');

INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('d8a6d9c2-75ee-4b4d-b898-c82d86839d10', 'Military Commander', '4dc07904-c25d-49e2-b3b1-e53fa510995a', '6459dc19-8a69-48e2-b05e-d65e9605d164');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('b6171f4a-3d66-47ef-9280-494677497fba', 'Chief Strategist', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '0814fb36-945a-4f6b-8bfa-22c9db457acc');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('e657ad56-a9c4-41c1-8f8c-f5c97113b7f2', 'Resource Manager', 'bd3cb424-34f2-4b3f-b346-b73199e3d488', '8dc4cf59-c13a-416e-82c0-d415cb8b1ae9');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('5ee7d763-23be-4157-8675-fe1d2a3a32fa', 'Chief Strategist', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '7bbba9cc-9146-4ca1-8ae8-f9a08dff7777');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('00b3b64e-d480-44ab-a3b9-e64ab67f8aa4', 'Military Commander', 'aab6d30d-8b26-42e1-81d8-651c95052d08', 'd3e411eb-4635-4572-8e92-49e879bf2130');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('a830104c-4265-4a5f-95a9-575e65920f38', 'Diplomatic Envoy', '90e94763-fd87-4ffd-99c1-f61575a006f4', '7bbba9cc-9146-4ca1-8ae8-f9a08dff7777');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('c7138924-af56-4eb1-933d-ed109b8627bd', 'Chief Strategist', '00b2b53b-904e-4ee1-9230-0ea2d66035ee', 'd3e411eb-4635-4572-8e92-49e879bf2130');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('c8b70fbf-cbc7-4e51-9dc3-24b776a1206f', 'Diplomatic Envoy', '94ce066d-a164-410a-a81a-4af1ad121241', '6f386385-aac7-4048-aba3-e2f64e4cc542');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('9e0eb442-acbb-4148-823d-d9b611c7c3b2', 'Diplomatic Envoy', '94ce066d-a164-410a-a81a-4af1ad121241', '8b09da2c-ce3a-4f5d-9575-032ce8b18fe3');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('66338d80-f5b0-4e5a-a6ce-b58f68c6a705', 'Resource Manager', 'ed392e4b-a6fd-47fb-9bbf-5e2f7dc7b4dc', '6459dc19-8a69-48e2-b05e-d65e9605d164');

INSERT INTO "Account" ("id", "username", "email", "passwordHash", "userId") VALUES ('5509e011-d99f-4ea2-bd8f-16c45bf801a7', 'strategicGenius', '172Coy.Smith@hotmail.com', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC', '566fd5d6-afc4-417d-a840-5f76ff9ca0f7');
INSERT INTO "Account" ("id", "username", "email", "passwordHash", "userId") VALUES ('d1439d35-14eb-4853-9fc6-8019dca07fd8', 'strategicGenius', '176Jedidiah86@yahoo.com', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC', '566fd5d6-afc4-417d-a840-5f76ff9ca0f7');
INSERT INTO "Account" ("id", "username", "email", "passwordHash", "userId") VALUES ('62eb67e3-a995-43a2-92c8-a75fd01dfe92', 'strategicGenius', '180Carter_Rogahn74@hotmail.com', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC', 'ed392e4b-a6fd-47fb-9bbf-5e2f7dc7b4dc');
INSERT INTO "Account" ("id", "username", "email", "passwordHash", "userId") VALUES ('319cfa58-b888-4581-b036-28c7620fd92e', 'villageKing', '184Felix66@yahoo.com', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC', 'ed392e4b-a6fd-47fb-9bbf-5e2f7dc7b4dc');
INSERT INTO "Account" ("id", "username", "email", "passwordHash", "userId") VALUES ('bcbc7677-3270-49ef-91b8-8576297ae6e3', 'travianMaster123', '188Weldon.Thompson80@hotmail.com', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC', 'c411ef2a-9cfa-4ed1-aacf-0c0b224daa66');
INSERT INTO "Account" ("id", "username", "email", "passwordHash", "userId") VALUES ('b3776baa-80dd-47ce-8ddb-84b728c4e841', 'strategicGenius', '192Ramona.Kautzer@hotmail.com', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Account" ("id", "username", "email", "passwordHash", "userId") VALUES ('2ab4743d-cbcf-41c6-9c43-f9efb0011b09', 'strategicGenius', '196Barrett_Jenkins73@yahoo.com', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC', '566fd5d6-afc4-417d-a840-5f76ff9ca0f7');
INSERT INTO "Account" ("id", "username", "email", "passwordHash", "userId") VALUES ('6b88d760-d2c0-4c23-92bf-1ce417f723e1', 'villageKing', '200Kamille_Jones@yahoo.com', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC', 'c411ef2a-9cfa-4ed1-aacf-0c0b224daa66');
INSERT INTO "Account" ("id", "username", "email", "passwordHash", "userId") VALUES ('8ee0c0e2-6504-4688-b65a-da8b6d17a75f', 'tribeLeader', '204Stephon78@gmail.com', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC', '90e94763-fd87-4ffd-99c1-f61575a006f4');
INSERT INTO "Account" ("id", "username", "email", "passwordHash", "userId") VALUES ('72c2d849-a92d-4f2b-a076-b96e781e8b36', 'heroicFarmer', '208Alexa90@hotmail.com', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');

INSERT INTO "Village" ("id", "name", "coordinateX", "coordinateY", "accountId") VALUES ('4f6097df-ea51-4b45-8725-dc7bffc9c40e', 'Winterfell', 465, 766, '72c2d849-a92d-4f2b-a076-b96e781e8b36');
INSERT INTO "Village" ("id", "name", "coordinateX", "coordinateY", "accountId") VALUES ('4b25ac44-df12-4761-9240-8e4a2b1bf94e', 'Thornfield', 133, 862, '319cfa58-b888-4581-b036-28c7620fd92e');
INSERT INTO "Village" ("id", "name", "coordinateX", "coordinateY", "accountId") VALUES ('1e48af6d-4d8d-4057-8c8e-2f54c85a8316', 'Dragonstone', 451, 615, 'd1439d35-14eb-4853-9fc6-8019dca07fd8');
INSERT INTO "Village" ("id", "name", "coordinateX", "coordinateY", "accountId") VALUES ('1a159c60-622c-47be-883e-94fe19f7bf99', 'Rivendell', 327, 336, '6b88d760-d2c0-4c23-92bf-1ce417f723e1');
INSERT INTO "Village" ("id", "name", "coordinateX", "coordinateY", "accountId") VALUES ('1ba7f19a-7558-4d7c-8e22-a888f7152da6', 'Eldoria', 927, 133, '319cfa58-b888-4581-b036-28c7620fd92e');
INSERT INTO "Village" ("id", "name", "coordinateX", "coordinateY", "accountId") VALUES ('f06f5a5f-1b9d-4ba8-a70a-0fed9d054003', 'Eldoria', 400, 315, '6b88d760-d2c0-4c23-92bf-1ce417f723e1');
INSERT INTO "Village" ("id", "name", "coordinateX", "coordinateY", "accountId") VALUES ('619155a1-2e27-4e5b-8dac-09e166c8f129', 'Thornfield', 231, 80, '2ab4743d-cbcf-41c6-9c43-f9efb0011b09');
INSERT INTO "Village" ("id", "name", "coordinateX", "coordinateY", "accountId") VALUES ('37884ba8-3807-4b9b-a3c6-c0f949f07437', 'Thornfield', 113, 161, '72c2d849-a92d-4f2b-a076-b96e781e8b36');
INSERT INTO "Village" ("id", "name", "coordinateX", "coordinateY", "accountId") VALUES ('0ad60328-0a48-4965-a77e-de1c20c090c9', 'Thornfield', 966, 904, '8ee0c0e2-6504-4688-b65a-da8b6d17a75f');
INSERT INTO "Village" ("id", "name", "coordinateX", "coordinateY", "accountId") VALUES ('67420ac2-dbcd-4efc-9f1a-75384741f78e', 'Thornfield', 140, 76, '2ab4743d-cbcf-41c6-9c43-f9efb0011b09');

INSERT INTO "Troop" ("id", "type", "quantity", "villageId") VALUES ('25e6e65d-0222-4fae-9a7e-c458d5208939', 'Equites Legati', 43, '67420ac2-dbcd-4efc-9f1a-75384741f78e');
INSERT INTO "Troop" ("id", "type", "quantity", "villageId") VALUES ('44ae6382-a5ca-4138-820e-d17cb0c11349', 'Imperian', 853, '0ad60328-0a48-4965-a77e-de1c20c090c9');
INSERT INTO "Troop" ("id", "type", "quantity", "villageId") VALUES ('37a9dd4c-daaa-4229-ba0b-11746d0181fc', 'Praetorian', 98, '1ba7f19a-7558-4d7c-8e22-a888f7152da6');
INSERT INTO "Troop" ("id", "type", "quantity", "villageId") VALUES ('d937f06c-d78d-453d-9d3a-443425463223', 'Equites Imperatoris', 884, '0ad60328-0a48-4965-a77e-de1c20c090c9');
INSERT INTO "Troop" ("id", "type", "quantity", "villageId") VALUES ('69092687-b995-4e4a-8150-02be60d86531', 'Imperian', 15, 'f06f5a5f-1b9d-4ba8-a70a-0fed9d054003');
INSERT INTO "Troop" ("id", "type", "quantity", "villageId") VALUES ('98ed7882-23ff-4714-ad40-767d0764f132', 'Praetorian', 8, '4f6097df-ea51-4b45-8725-dc7bffc9c40e');
INSERT INTO "Troop" ("id", "type", "quantity", "villageId") VALUES ('c9151b4e-8a07-4297-a0ee-5c6a692c99ab', 'Praetorian', 569, '4f6097df-ea51-4b45-8725-dc7bffc9c40e');
INSERT INTO "Troop" ("id", "type", "quantity", "villageId") VALUES ('e5e5048c-6d53-4fb4-9080-06d3f851b814', 'Praetorian', 55, '1e48af6d-4d8d-4057-8c8e-2f54c85a8316');
INSERT INTO "Troop" ("id", "type", "quantity", "villageId") VALUES ('bf151169-febe-47ec-b17d-30f6f36b5e3d', 'Praetorian', 95, '619155a1-2e27-4e5b-8dac-09e166c8f129');
INSERT INTO "Troop" ("id", "type", "quantity", "villageId") VALUES ('fbb1eceb-f016-42e5-864e-993bc282c430', 'Equites Legati', 895, '37884ba8-3807-4b9b-a3c6-c0f949f07437');

INSERT INTO "Resource" ("id", "type", "quantity", "capacity", "villageId") VALUES ('e1ae0a30-5220-4a90-9068-d5f144aa6cab', 'wood', 623, 243, '1a159c60-622c-47be-883e-94fe19f7bf99');
INSERT INTO "Resource" ("id", "type", "quantity", "capacity", "villageId") VALUES ('f72a0201-37cf-4302-a98e-bf7fd9f03ebb', 'wood', 792, 429, '37884ba8-3807-4b9b-a3c6-c0f949f07437');
INSERT INTO "Resource" ("id", "type", "quantity", "capacity", "villageId") VALUES ('5e6ee68e-278e-45a9-b3b7-b0b2bbb816f5', 'crop', 715, 856, '4f6097df-ea51-4b45-8725-dc7bffc9c40e');
INSERT INTO "Resource" ("id", "type", "quantity", "capacity", "villageId") VALUES ('dc6080e0-df7d-4296-87cc-4bb6962a7e59', 'gold', 356, 760, '37884ba8-3807-4b9b-a3c6-c0f949f07437');
INSERT INTO "Resource" ("id", "type", "quantity", "capacity", "villageId") VALUES ('1688ec8d-e5bf-4d14-8e43-581e96b2d39b', 'iron', 809, 646, '67420ac2-dbcd-4efc-9f1a-75384741f78e');
INSERT INTO "Resource" ("id", "type", "quantity", "capacity", "villageId") VALUES ('4e51777e-37d7-4816-8dbc-132f5afab9a5', 'clay', 427, 731, '619155a1-2e27-4e5b-8dac-09e166c8f129');
INSERT INTO "Resource" ("id", "type", "quantity", "capacity", "villageId") VALUES ('c965775f-55ee-486b-aed5-70929f3ce129', 'wood', 97, 535, '1a159c60-622c-47be-883e-94fe19f7bf99');
INSERT INTO "Resource" ("id", "type", "quantity", "capacity", "villageId") VALUES ('7b1ede43-4ab9-43d9-86ba-99085e6cbb61', 'gold', 699, 538, 'f06f5a5f-1b9d-4ba8-a70a-0fed9d054003');
INSERT INTO "Resource" ("id", "type", "quantity", "capacity", "villageId") VALUES ('24e232bb-874c-41ae-8b5c-49180f123853', 'wood', 59, 384, '4f6097df-ea51-4b45-8725-dc7bffc9c40e');
INSERT INTO "Resource" ("id", "type", "quantity", "capacity", "villageId") VALUES ('60e633db-e1ae-42a6-b269-0c0aa7ca26dc', 'crop', 84, 480, '4f6097df-ea51-4b45-8725-dc7bffc9c40e');

INSERT INTO "Building" ("id", "type", "level", "coordinateX", "coordinateY", "villageId") VALUES ('2baed32f-c890-435b-ad8f-d4d1b1c67389', 'Academy', 922, 652, 12, '4f6097df-ea51-4b45-8725-dc7bffc9c40e');
INSERT INTO "Building" ("id", "type", "level", "coordinateX", "coordinateY", "villageId") VALUES ('a2efe7b4-59d7-4e07-96e1-7dd74d663d12', 'Warehouse', 756, 282, 506, '0ad60328-0a48-4965-a77e-de1c20c090c9');
INSERT INTO "Building" ("id", "type", "level", "coordinateX", "coordinateY", "villageId") VALUES ('dce0940b-42aa-464c-9ec2-4dadca726737', 'Granary', 608, 102, 769, '1a159c60-622c-47be-883e-94fe19f7bf99');
INSERT INTO "Building" ("id", "type", "level", "coordinateX", "coordinateY", "villageId") VALUES ('3d5ab618-f171-471b-a17c-b2f6b8ae0550', 'Barracks', 670, 860, 949, '4f6097df-ea51-4b45-8725-dc7bffc9c40e');
INSERT INTO "Building" ("id", "type", "level", "coordinateX", "coordinateY", "villageId") VALUES ('911baf68-e3ee-4ba7-9fe9-257f2c493706', 'Barracks', 297, 281, 110, '0ad60328-0a48-4965-a77e-de1c20c090c9');
INSERT INTO "Building" ("id", "type", "level", "coordinateX", "coordinateY", "villageId") VALUES ('d48ed277-456e-45f8-b063-0eb22bb6eed7', 'Academy', 580, 923, 985, 'f06f5a5f-1b9d-4ba8-a70a-0fed9d054003');
INSERT INTO "Building" ("id", "type", "level", "coordinateX", "coordinateY", "villageId") VALUES ('9ee41349-c547-4af0-9d85-440e0e7e0328', 'Granary', 564, 946, 855, '1ba7f19a-7558-4d7c-8e22-a888f7152da6');
INSERT INTO "Building" ("id", "type", "level", "coordinateX", "coordinateY", "villageId") VALUES ('5241e430-ba83-41d1-842b-68a6c2f82cc9', 'Smithy', 107, 148, 844, 'f06f5a5f-1b9d-4ba8-a70a-0fed9d054003');
INSERT INTO "Building" ("id", "type", "level", "coordinateX", "coordinateY", "villageId") VALUES ('d1210f8c-6b4d-4073-85cf-12473ff40cd2', 'Warehouse', 321, 622, 443, '4f6097df-ea51-4b45-8725-dc7bffc9c40e');
INSERT INTO "Building" ("id", "type", "level", "coordinateX", "coordinateY", "villageId") VALUES ('12d1459d-75bd-48d8-97b6-ebed07593439', 'Granary', 401, 187, 355, '1e48af6d-4d8d-4057-8c8e-2f54c85a8316');

INSERT INTO "Task" ("id", "type", "status", "startTime", "endTime", "accountId") VALUES ('31c3861e-6499-40b7-a35a-f536f69d785e', 'attack', 'failed', '2023-09-21T14:30:37.054Z', '2024-06-03T22:47:11.803Z', 'bcbc7677-3270-49ef-91b8-8576297ae6e3');
INSERT INTO "Task" ("id", "type", "status", "startTime", "endTime", "accountId") VALUES ('52c8ee7f-9e31-411c-a35f-d5f9cf95a5f4', 'defend', 'failed', '2025-03-07T04:50:14.044Z', '2025-02-17T11:21:21.165Z', '8ee0c0e2-6504-4688-b65a-da8b6d17a75f');
INSERT INTO "Task" ("id", "type", "status", "startTime", "endTime", "accountId") VALUES ('d390e54e-d360-44a2-9d9f-c95961d4e0d7', 'attack', 'in_progress', '2024-03-03T08:56:35.316Z', '2024-06-03T21:00:23.668Z', '62eb67e3-a995-43a2-92c8-a75fd01dfe92');
INSERT INTO "Task" ("id", "type", "status", "startTime", "endTime", "accountId") VALUES ('fefc235f-8589-4b35-aaaa-2613dc457d89', 'trade', 'failed', '2024-07-06T20:30:33.690Z', '2024-08-03T04:52:44.188Z', '6b88d760-d2c0-4c23-92bf-1ce417f723e1');
INSERT INTO "Task" ("id", "type", "status", "startTime", "endTime", "accountId") VALUES ('8d448d5a-fb6a-4d2f-af81-cbe2582df3a1', 'attack', 'failed', '2025-07-01T01:25:53.695Z', '2024-08-21T08:37:44.178Z', '6b88d760-d2c0-4c23-92bf-1ce417f723e1');
INSERT INTO "Task" ("id", "type", "status", "startTime", "endTime", "accountId") VALUES ('0271b08f-cd8e-4d04-b81b-94234700db97', 'defend', 'failed', '2024-05-28T15:13:59.503Z', '2023-12-05T08:24:27.796Z', '5509e011-d99f-4ea2-bd8f-16c45bf801a7');
INSERT INTO "Task" ("id", "type", "status", "startTime", "endTime", "accountId") VALUES ('c9dc9d1b-f4c1-48ec-a854-adf32d68e424', 'defend', 'cancelled', '2025-05-03T03:38:04.392Z', '2024-09-21T07:32:43.932Z', '2ab4743d-cbcf-41c6-9c43-f9efb0011b09');
INSERT INTO "Task" ("id", "type", "status", "startTime", "endTime", "accountId") VALUES ('51dd6387-fa44-4acb-8eef-f0b44bacced4', 'defend', 'cancelled', '2024-11-14T22:40:20.967Z', '2024-07-19T04:54:01.382Z', '2ab4743d-cbcf-41c6-9c43-f9efb0011b09');
INSERT INTO "Task" ("id", "type", "status", "startTime", "endTime", "accountId") VALUES ('f7673e47-d052-4aeb-b658-79ff811515fd', 'attack', 'completed', '2025-08-18T09:05:02.396Z', '2024-09-09T22:54:32.243Z', 'b3776baa-80dd-47ce-8ddb-84b728c4e841');
INSERT INTO "Task" ("id", "type", "status", "startTime", "endTime", "accountId") VALUES ('aa785471-a272-4649-9f7e-5c723e6add45', 'attack', 'failed', '2025-04-26T17:28:00.548Z', '2024-01-08T04:52:41.215Z', '8ee0c0e2-6504-4688-b65a-da8b6d17a75f');

  `

  const sqls = splitSql(sql)

  for (const sql of sqls) {
    try {
      await prisma.$executeRawUnsafe(`${sql}`)
    } catch (error) {
      console.log(`Could not insert SQL: ${error.message}`)
    }
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async error => {
    console.error(error)
    await prisma.$disconnect()
    process.exit(1)
  })
