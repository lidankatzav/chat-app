export interface Message {
  id: number;
  body: string;
  authorId: number;
  authorName?: string;
  timestamp: number | Date;
  likes?: number[];
  status?: 'pending' | 'ok' | 'error';
}

export const mockMessages: Message[] = [
  {
    "authorId": 3,
    "id": 1,
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    "timestamp": 1671344833575,
    "likes": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8
    ]
  },
  {
    "authorId": 8,
    "id": 2,
    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
    "timestamp": 1671344893575,
    "likes": [
      1,
      2,
      3,
      4,
      5
    ]
  },
  {
    "authorId": 6,
    "id": 3,
    "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
    "timestamp": 1671344953575,
    "likes": [
      1,
      2
    ]
  },
  {
    "authorId": 3,
    "id": 4,
    "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
    "timestamp": 1671345013575,
    "likes": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ]
  },
  {
    "authorId": 3,
    "id": 5,
    "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
    "timestamp": 1671345073575,
    "likes": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8
    ]
  },
  {
    "authorId": 8,
    "id": 6,
    "body": "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae",
    "timestamp": 1671345133575,
    "likes": [
      1,
      2,
      3,
      4,
      5
    ]
  },
  {
    "authorId": 1,
    "id": 7,
    "body": "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas",
    "timestamp": 1671345193575,
    "likes": [
      1,
      2
    ]
  },
  {
    "authorId": 1,
    "id": 8,
    "body": "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae",
    "timestamp": 1671345253575,
    "likes": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8
    ]
  },
  {
    "authorId": 9,
    "id": 9,
    "body": "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas",
    "timestamp": 1671345313575,
    "likes": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8
    ]
  },
  {
    "authorId": 4,
    "id": 10,
    "body": "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error",
    "timestamp": 1671345373575,
    "likes": [
      1,
      2,
      3,
      4
    ]
  },
  {
    "authorId": 6,
    "id": 11,
    "body": "delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi",
    "timestamp": 1671345433575,
    "likes": [
      1,
      2,
      3,
      4
    ]
  },
  {
    "authorId": 2,
    "id": 12,
    "body": "itaque id aut magnam\npraesentium quia et ea odit et ea voluptas et\nsapiente quia nihil amet occaecati quia id voluptatem\nincidunt ea est distinctio odio",
    "timestamp": 1671345493575,
    "likes": [
      1,
      2,
      3,
      4
    ]
  },
  {
    "authorId": 9,
    "id": 13,
    "body": "aut dicta possimus sint mollitia voluptas commodi quo doloremque\niste corrupti reiciendis voluptatem eius rerum\nsit cumque quod eligendi laborum minima\nperferendis recusandae assumenda consectetur porro architecto ipsum ipsam",
    "timestamp": 1671345553575,
    "likes": [
      1,
      2,
      3,
      4,
      5,
      6
    ]
  },
  {
    "authorId": 1,
    "id": 14,
    "body": "fuga et accusamus dolorum perferendis illo voluptas\nnon doloremque neque facere\nad qui dolorum molestiae beatae\nsed aut voluptas totam sit illum",
    "timestamp": 1671345613575,
    "likes": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ]
  },
  {
    "authorId": 6,
    "id": 15,
    "body": "reprehenderit quos placeat\nvelit minima officia dolores impedit repudiandae molestiae nam\nvoluptas recusandae quis delectus\nofficiis harum fugiat vitae",
    "timestamp": 1671345673575,
    "likes": [
      1,
      2,
      3,
      4
    ]
  },
  {
    "authorId": 3,
    "id": 16,
    "body": "suscipit nam nisi quo aperiam aut\nasperiores eos fugit maiores voluptatibus quia\nvoluptatem quis ullam qui in alias quia est\nconsequatur magni mollitia accusamus ea nisi voluptate dicta",
    "timestamp": 1671345733575,
    "likes": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ]
  },
  {
    "authorId": 4,
    "id": 17,
    "body": "eos voluptas et aut odit natus earum\naspernatur fuga molestiae ullam\ndeserunt ratione qui eos\nqui nihil ratione nemo velit ut aut id quo",
    "timestamp": 1671345793575,
    "likes": []
  },
  {
    "authorId": 6,
    "id": 18,
    "body": "eveniet quo quis\nlaborum totam consequatur non dolor\nut et est repudiandae\nest voluptatem vel debitis et magnam",
    "timestamp": 1671345853575,
    "likes": [
      1,
      2,
      3,
      4,
      5,
      6,
      7
    ]
  },
  {
    "authorId": 2,
    "id": 19,
    "body": "illum quis cupiditate provident sit magnam\nea sed aut omnis\nveniam maiores ullam consequatur atque\nadipisci quo iste expedita sit quos voluptas",
    "timestamp": 1671345913575,
    "likes": [
      1,
      2
    ]
  },
  {
    "authorId": 2,
    "id": 20,
    "body": "qui consequuntur ducimus possimus quisquam amet similique\nsuscipit porro ipsam amet\neos veritatis officiis exercitationem vel fugit aut necessitatibus totam\nomnis rerum consequatur expedita quidem cumque explicabo",
    "timestamp": 1671345973575,
    "likes": [
      1,
      2,
      3,
      4,
      5,
      6,
      7
    ]
  },
  {
    "authorId": 9,
    "id": 21,
    "body": "repellat aliquid praesentium dolorem quo\nsed totam minus non itaque\nnihil labore molestiae sunt dolor eveniet hic recusandae veniam\ntempora et tenetur expedita sunt",
    "timestamp": 1671346033575,
    "likes": [
      1,
      2
    ]
  },
  {
    "authorId": 2,
    "id": 22,
    "body": "eos qui et ipsum ipsam suscipit aut\nsed omnis non odio\nexpedita earum mollitia molestiae aut atque rem suscipit\nnam impedit esse",
    "timestamp": 1671346093575,
    "likes": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ]
  },
  {
    "authorId": 8,
    "id": 23,
    "body": "veritatis unde neque eligendi\nquae quod architecto quo neque vitae\nest illo sit tempora doloremque fugit quod\net et vel beatae sequi ullam sed tenetur perspiciatis",
    "timestamp": 1671346153575,
    "likes": []
  },
  {
    "authorId": 2,
    "id": 24,
    "body": "enim et ex nulla\nomnis voluptas quia qui\nvoluptatem consequatur numquam aliquam sunt\ntotam recusandae id dignissimos aut sed asperiores deserunt",
    "timestamp": 1671346213575,
    "likes": []
  },
  {
    "authorId": 2,
    "id": 25,
    "body": "ullam consequatur ut\nomnis quis sit vel consequuntur\nipsa eligendi ipsum molestiae et omnis error nostrum\nmolestiae illo tempore quia et distinctio",
    "timestamp": 1671346273575,
    "likes": [
      1,
      2,
      3,
      4,
      5,
      6,
      7
    ]
  },
  {
    "authorId": 10,
    "id": 26,
    "body": "similique esse doloribus nihil accusamus\nomnis dolorem fuga consequuntur reprehenderit fugit recusandae temporibus\nperspiciatis cum ut laudantium\nomnis aut molestiae vel vero",
    "timestamp": 1671346333575,
    "likes": [
      1,
      2,
      3,
      4,
      5
    ]
  },
  {
    "authorId": 10,
    "id": 27,
    "body": "eum sed dolores ipsam sint possimus debitis occaecati\ndebitis qui qui et\nut placeat enim earum aut odit facilis\nconsequatur suscipit necessitatibus rerum sed inventore temporibus consequatur",
    "timestamp": 1671346393575,
    "likes": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ]
  },
  {
    "authorId": 5,
    "id": 28,
    "body": "non et quaerat ex quae ad maiores\nmaiores recusandae totam aut blanditiis mollitia quas illo\nut voluptatibus voluptatem\nsimilique nostrum eum",
    "timestamp": 1671346453575,
    "likes": [
      1,
      2,
      3,
      4,
      5,
      6,
      7
    ]
  },
  {
    "authorId": 10,
    "id": 29,
    "body": "odit magnam ut saepe sed non qui\ntempora atque nihil\naccusamus illum doloribus illo dolor\neligendi repudiandae odit magni similique sed cum maiores",
    "timestamp": 1671346513575,
    "likes": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8
    ]
  },
  {
    "authorId": 4,
    "id": 30,
    "body": "alias dolor cumque\nimpedit blanditiis non eveniet odio maxime\nblanditiis amet eius quis tempora quia autem rem\na provident perspiciatis quia",
    "timestamp": 1671346573575,
    "likes": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ]
  },
  {
    "authorId": 10,
    "id": 31,
    "body": "debitis eius sed quibusdam non quis consectetur vitae\nimpedit ut qui consequatur sed aut in\nquidem sit nostrum et maiores adipisci atque\nquaerat voluptatem adipisci repudiandae",
    "timestamp": 1671346633575,
    "likes": [
      1,
      2
    ]
  },
  {
    "authorId": 3,
    "id": 32,
    "body": "deserunt eos nobis asperiores et hic\nest debitis repellat molestiae optio\nnihil ratione ut eos beatae quibusdam distinctio maiores\nearum voluptates et aut adipisci ea maiores voluptas maxime",
    "timestamp": 1671346693576,
    "likes": [
      1,
      2,
      3,
      4,
      5,
      6,
      7
    ]
  },
  {
    "authorId": 3,
    "id": 33,
    "body": "rerum ut et numquam laborum odit est sit\nid qui sint in\nquasi tenetur tempore aperiam et quaerat qui in\nrerum officiis sequi cumque quod",
    "timestamp": 1671346753576,
    "likes": [
      1,
      2,
      3,
      4,
      5
    ]
  },
  {
    "authorId": 7,
    "id": 34,
    "body": "ea velit perferendis earum ut voluptatem voluptate itaque iusto\ntotam pariatur in\nnemo voluptatem voluptatem autem magni tempora minima in\nest distinctio qui assumenda accusamus dignissimos officia nesciunt nobis",
    "timestamp": 1671346813576,
    "likes": []
  },
  {
    "authorId": 2,
    "id": 35,
    "body": "nisi error delectus possimus ut eligendi vitae\nplaceat eos harum cupiditate facilis reprehenderit voluptatem beatae\nmodi ducimus quo illum voluptas eligendi\net nobis quia fugit",
    "timestamp": 1671346873576,
    "likes": [
      1,
      2
    ]
  },
  {
    "authorId": 10,
    "id": 36,
    "body": "ad mollitia et omnis minus architecto odit\nvoluptas doloremque maxime aut non ipsa qui alias veniam\nblanditiis culpa aut quia nihil cumque facere et occaecati\nqui aspernatur quia eaque ut aperiam inventore",
    "timestamp": 1671346933576,
    "likes": [
      1,
      2,
      3,
      4,
      5
    ]
  },
  {
    "authorId": 2,
    "id": 37,
    "body": "debitis et eaque non officia sed nesciunt pariatur vel\nvoluptatem iste vero et ea\nnumquam aut expedita ipsum nulla in\nvoluptates omnis consequatur aut enim officiis in quam qui",
    "timestamp": 1671346993576,
    "likes": [
      1,
      2
    ]
  },
  {
    "authorId": 10,
    "id": 38,
    "body": "animi esse sit aut sit nesciunt assumenda eum voluptas\nquia voluptatibus provident quia necessitatibus ea\nrerum repudiandae quia voluptatem delectus fugit aut id quia\nratione optio eos iusto veniam iure",
    "timestamp": 1671347053576,
    "likes": [
      1,
      2,
      3
    ]
  },
  {
    "authorId": 5,
    "id": 39,
    "body": "corporis rerum ducimus vel eum accusantium\nmaxime aspernatur a porro possimus iste omnis\nest in deleniti asperiores fuga aut\nvoluptas sapiente vel dolore minus voluptatem incidunt ex",
    "timestamp": 1671347113576,
    "likes": [
      1,
      2,
      3
    ]
  },
  {
    "authorId": 1,
    "id": 40,
    "body": "ut voluptatum aliquid illo tenetur nemo sequi quo facilis\nipsum rem optio mollitia quas\nvoluptatem eum voluptas qui\nunde omnis voluptatem iure quasi maxime voluptas nam",
    "timestamp": 1671347173576,
    "likes": [
      1,
      2,
      3,
      4,
      5
    ]
  },
  {
    "authorId": 4,
    "id": 41,
    "body": "molestias id nostrum\nexcepturi molestiae dolore omnis repellendus quaerat saepe\nconsectetur iste quaerat tenetur asperiores accusamus ex ut\nnam quidem est ducimus sunt debitis saepe",
    "timestamp": 1671347233576,
    "likes": [
      1,
      2
    ]
  },
  {
    "authorId": 6,
    "id": 42,
    "body": "odio fugit voluptatum ducimus earum autem est incidunt voluptatem\nodit reiciendis aliquam sunt sequi nulla dolorem\nnon facere repellendus voluptates quia\nratione harum vitae ut",
    "timestamp": 1671347293576,
    "likes": [
      1,
      2,
      3,
      4
    ]
  },
  {
    "authorId": 9,
    "id": 43,
    "body": "similique fugit est\nillum et dolorum harum et voluptate eaque quidem\nexercitationem quos nam commodi possimus cum odio nihil nulla\ndolorum exercitationem magnam ex et a et distinctio debitis",
    "timestamp": 1671347353576,
    "likes": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8
    ]
  },
  {
    "authorId": 6,
    "id": 44,
    "body": "temporibus est consectetur dolore\net libero debitis vel velit laboriosam quia\nipsum quibusdam qui itaque fuga rem aut\nea et iure quam sed maxime ut distinctio quae",
    "timestamp": 1671347413576,
    "likes": [
      1,
      2,
      3,
      4,
      5
    ]
  },
  {
    "authorId": 2,
    "id": 45,
    "body": "est natus reiciendis nihil possimus aut provident\nex et dolor\nrepellat pariatur est\nnobis rerum repellendus dolorem autem",
    "timestamp": 1671347473576,
    "likes": [
      1,
      2,
      3,
      4,
      5,
      6,
      7
    ]
  },
  {
    "authorId": 2,
    "id": 46,
    "body": "voluptatem quisquam iste\nvoluptatibus natus officiis facilis dolorem\nquis quas ipsam\nvel et voluptatum in aliquid",
    "timestamp": 1671347533576,
    "likes": [
      1,
      2,
      3,
      4,
      5,
      6
    ]
  },
  {
    "authorId": 9,
    "id": 47,
    "body": "voluptatem assumenda ut qui ut cupiditate aut impedit veniam\noccaecati nemo illum voluptatem laudantium\nmolestiae beatae rerum ea iure soluta nostrum\neligendi et voluptate",
    "timestamp": 1671347593576,
    "likes": [
      1,
      2,
      3
    ]
  },
  {
    "authorId": 2,
    "id": 48,
    "body": "voluptates quo voluptatem facilis iure occaecati\nvel assumenda rerum officia et\nillum perspiciatis ab deleniti\nlaudantium repellat ad ut et autem reprehenderit",
    "timestamp": 1671347653576,
    "likes": [
      1
    ]
  },
  {
    "authorId": 7,
    "id": 49,
    "body": "inventore ab sint\nnatus fugit id nulla sequi architecto nihil quaerat\neos tenetur in in eum veritatis non\nquibusdam officiis aspernatur cumque aut commodi aut",
    "timestamp": 1671347713576,
    "likes": [
      1,
      2,
      3,
      4,
      5,
      6,
      7
    ]
  },
  {
    "authorId": 5,
    "id": 50,
    "body": "error suscipit maxime adipisci consequuntur recusandae\nvoluptas eligendi et est et voluptates\nquia distinctio ab amet quaerat molestiae et vitae\nadipisci impedit sequi nesciunt quis consectetur",
    "timestamp": 1671347773576,
    "likes": [
      1,
      2,
      3,
      4,
      5,
      6
    ]
  },
  {
    "authorId": 3,
    "id": 51,
    "body": "sunt dolores aut doloribus\ndolore doloribus voluptates tempora et\ndoloremque et quo\ncum asperiores sit consectetur dolorem",
    "timestamp": 1671347833576,
    "likes": [
      1,
      2,
      3,
      4,
      5,
      6
    ]
  },
  {
    "authorId": 9,
    "id": 52,
    "body": "iusto est quibusdam fuga quas quaerat molestias\na enim ut sit accusamus enim\ntemporibus iusto accusantium provident architecto\nsoluta esse reprehenderit qui laborum",
    "timestamp": 1671347893576,
    "likes": [
      1,
      2,
      3
    ]
  },
  {
    "authorId": 9,
    "id": 53,
    "body": "minima harum praesentium eum rerum illo dolore\nquasi exercitationem rerum nam\nporro quis neque quo\nconsequatur minus dolor quidem veritatis sunt non explicabo similique",
    "timestamp": 1671347953576,
    "likes": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ]
  },
  {
    "authorId": 3,
    "id": 54,
    "body": "totam corporis dignissimos\nvitae dolorem ut occaecati accusamus\nex velit deserunt\net exercitationem vero incidunt corrupti mollitia",
    "timestamp": 1671348013576,
    "likes": [
      1,
      2,
      3
    ]
  },
  {
    "authorId": 2,
    "id": 55,
    "body": "debitis excepturi ea perferendis harum libero optio\neos accusamus cum fuga ut sapiente repudiandae\net ut incidunt omnis molestiae\nnihil ut eum odit",
    "timestamp": 1671348073576,
    "likes": [
      1,
      2,
      3,
      4,
      5
    ]
  },
  {
    "authorId": 1,
    "id": 56,
    "body": "aut est omnis dolores\nneque rerum quod ea rerum velit pariatur beatae excepturi\net provident voluptas corrupti\ncorporis harum reprehenderit dolores eligendi",
    "timestamp": 1671348133576,
    "likes": [
      1,
      2,
      3,
      4,
      5,
      6,
      7
    ]
  },
  {
    "authorId": 5,
    "id": 57,
    "body": "at pariatur consequuntur earum quidem\nquo est laudantium soluta voluptatem\nqui ullam et est\net cum voluptas voluptatum repellat est",
    "timestamp": 1671348193576,
    "likes": [
      1,
      2,
      3
    ]
  },
  {
    "authorId": 6,
    "id": 58,
    "body": "veniam voluptatum quae adipisci id\net id quia eos ad et dolorem\naliquam quo nisi sunt eos impedit error\nad similique veniam",
    "timestamp": 1671348253576,
    "likes": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ]
  },
  {
    "authorId": 6,
    "id": 59,
    "body": "perspiciatis et quam ea autem temporibus non voluptatibus qui\nbeatae a earum officia nesciunt dolores suscipit voluptas et\nanimi doloribus cum rerum quas et magni\net hic ut ut commodi expedita sunt",
    "timestamp": 1671348313576,
    "likes": [
      1,
      2,
      3,
      4,
      5,
      6,
      7
    ]
  },
  {
    "authorId": 8,
    "id": 60,
    "body": "asperiores sunt ab assumenda cumque modi velit\nqui esse omnis\nvoluptate et fuga perferendis voluptas\nillo ratione amet aut et omnis",
    "timestamp": 1671348373576,
    "likes": [
      1,
      2,
      3
    ]
  },
  {
    "authorId": 4,
    "id": 61,
    "body": "ab nemo optio odio\ndelectus tenetur corporis similique nobis repellendus rerum omnis facilis\nvero blanditiis debitis in nesciunt doloribus dicta dolores\nmagnam minus velit",
    "timestamp": 1671348433576,
    "likes": [
      1,
      2,
      3
    ]
  },
  {
    "authorId": 6,
    "id": 62,
    "body": "enim aspernatur illo distinctio quae praesentium\nbeatae alias amet delectus qui voluptate distinctio\nodit sint accusantium autem omnis\nquo molestiae omnis ea eveniet optio",
    "timestamp": 1671348493576,
    "likes": []
  },
  {
    "authorId": 6,
    "id": 63,
    "body": "enim adipisci aspernatur nemo\nnumquam omnis facere dolorem dolor ex quis temporibus incidunt\nab delectus culpa quo reprehenderit blanditiis asperiores\naccusantium ut quam in voluptatibus voluptas ipsam dicta",
    "timestamp": 1671348553576,
    "likes": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8
    ]
  },
  {
    "authorId": 7,
    "id": 64,
    "body": "id velit blanditiis\neum ea voluptatem\nmolestiae sint occaecati est eos perspiciatis\nincidunt a error provident eaque aut aut qui",
    "timestamp": 1671348613576,
    "likes": [
      1
    ]
  },
  {
    "authorId": 4,
    "id": 65,
    "body": "voluptatibus ex esse\nsint explicabo est aliquid cumque adipisci fuga repellat labore\nmolestiae corrupti ex saepe at asperiores et perferendis\nnatus id esse incidunt pariatur",
    "timestamp": 1671348673576,
    "likes": [
      1,
      2
    ]
  },
  {
    "authorId": 5,
    "id": 66,
    "body": "officia veritatis tenetur vero qui itaque\nsint non ratione\nsed et ut asperiores iusto eos molestiae nostrum\nveritatis quibusdam et nemo iusto saepe",
    "timestamp": 1671348733576,
    "likes": [
      1,
      2,
      3,
      4,
      5,
      6
    ]
  },
  {
    "authorId": 9,
    "id": 67,
    "body": "reprehenderit id nostrum\nvoluptas doloremque pariatur sint et accusantium quia quod aspernatur\net fugiat amet\nnon sapiente et consequatur necessitatibus molestiae",
    "timestamp": 1671348793576,
    "likes": [
      1,
      2,
      3,
      4
    ]
  },
  {
    "authorId": 1,
    "id": 68,
    "body": "magnam molestiae perferendis quisquam\nqui cum reiciendis\nquaerat animi amet hic inventore\nea quia deleniti quidem saepe porro velit",
    "timestamp": 1671348853576,
    "likes": [
      1,
      2,
      3,
      4,
      5,
      6
    ]
  },
  {
    "authorId": 2,
    "id": 69,
    "body": "officiis error culpa consequatur modi asperiores et\ndolorum assumenda voluptas et vel qui aut vel rerum\nvoluptatum quisquam perspiciatis quia rerum consequatur totam quas\nsequi commodi repudiandae asperiores et saepe a",
    "timestamp": 1671348913576,
    "likes": [
      1,
      2,
      3,
      4,
      5,
      6
    ]
  },
  {
    "authorId": 8,
    "id": 70,
    "body": "sunt repellendus quae\nest asperiores aut deleniti esse accusamus repellendus quia aut\nquia dolorem unde\neum tempora esse dolore",
    "timestamp": 1671348973577,
    "likes": []
  },
  {
    "authorId": 7,
    "id": 71,
    "body": "occaecati a doloribus\niste saepe consectetur placeat eum voluptate dolorem et\nqui quo quia voluptas\nrerum ut id enim velit est perferendis",
    "timestamp": 1671349033577,
    "likes": [
      1,
      2,
      3,
      4,
      5,
      6,
      7
    ]
  },
  {
    "authorId": 6,
    "id": 72,
    "body": "quam occaecati qui deleniti consectetur\nconsequatur aut facere quas exercitationem aliquam hic voluptas\nneque id sunt ut aut accusamus\nsunt consectetur expedita inventore velit",
    "timestamp": 1671349093577,
    "likes": [
      1,
      2,
      3
    ]
  },
  {
    "authorId": 4,
    "id": 73,
    "body": "voluptatem cumque tenetur consequatur expedita ipsum nemo quia explicabo\naut eum minima consequatur\ntempore cumque quae est et\net in consequuntur voluptatem voluptates aut",
    "timestamp": 1671349153577,
    "likes": [
      1,
      2,
      3,
      4,
      5
    ]
  },
  {
    "authorId": 9,
    "id": 74,
    "body": "odit qui et et necessitatibus sint veniam\nmollitia amet doloremque molestiae commodi similique magnam et quam\nblanditiis est itaque\nquo et tenetur ratione occaecati molestiae tempora",
    "timestamp": 1671349213577,
    "likes": [
      1,
      2,
      3
    ]
  },
  {
    "authorId": 5,
    "id": 75,
    "body": "commodi non non omnis et voluptas sit\nautem aut nobis magnam et sapiente voluptatem\net laborum repellat qui delectus facilis temporibus\nrerum amet et nemo voluptate expedita adipisci error dolorem",
    "timestamp": 1671349273577,
    "likes": [
      1,
      2
    ]
  },
  {
    "authorId": 5,
    "id": 76,
    "body": "ut animi facere\ntotam iusto tempore\nmolestiae eum aut et dolorem aperiam\nquaerat recusandae totam odio",
    "timestamp": 1671349333577,
    "likes": [
      1
    ]
  },
  {
    "authorId": 5,
    "id": 77,
    "body": "modi ut in nulla repudiandae dolorum nostrum eos\naut consequatur omnis\nut incidunt est omnis iste et quam\nvoluptates sapiente aliquam asperiores nobis amet corrupti repudiandae provident",
    "timestamp": 1671349393577,
    "likes": [
      1,
      2,
      3
    ]
  },
  {
    "authorId": 6,
    "id": 78,
    "body": "nobis facilis odit tempore cupiditate quia\nassumenda doloribus rerum qui ea\nillum et qui totam\naut veniam repellendus",
    "timestamp": 1671349453577,
    "likes": [
      1,
      2,
      3,
      4
    ]
  },
  {
    "authorId": 5,
    "id": 79,
    "body": "libero accusantium et et facere incidunt sit dolorem\nnon excepturi qui quia sed laudantium\nquisquam molestiae ducimus est\nofficiis esse molestiae iste et quos",
    "timestamp": 1671349513577,
    "likes": [
      1,
      2,
      3
    ]
  },
  {
    "authorId": 8,
    "id": 80,
    "body": "ex quod dolorem ea eum iure qui provident amet\nquia qui facere excepturi et repudiandae\nasperiores molestias provident\nminus incidunt vero fugit rerum sint sunt excepturi provident",
    "timestamp": 1671349573577,
    "likes": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8
    ]
  },
  {
    "authorId": 8,
    "id": 81,
    "body": "facere qui nesciunt est voluptatum voluptatem nisi\nsequi eligendi necessitatibus ea at rerum itaque\nharum non ratione velit laboriosam quis consequuntur\nex officiis minima doloremque voluptas ut aut",
    "timestamp": 1671349633577,
    "likes": [
      1,
      2
    ]
  },
  {
    "authorId": 7,
    "id": 82,
    "body": "ut libero sit aut totam inventore sunt\nporro sint qui sunt molestiae\nconsequatur cupiditate qui iste ducimus adipisci\ndolor enim assumenda soluta laboriosam amet iste delectus hic",
    "timestamp": 1671349693577,
    "likes": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8
    ]
  },
  {
    "authorId": 2,
    "id": 83,
    "body": "est molestiae facilis quis tempora numquam nihil qui\nvoluptate sapiente consequatur est qui\nnecessitatibus autem aut ipsa aperiam modi dolore numquam\nreprehenderit eius rem quibusdam",
    "timestamp": 1671349753577,
    "likes": []
  },
  {
    "authorId": 3,
    "id": 84,
    "body": "sint molestiae magni a et quos\neaque et quasi\nut rerum debitis similique veniam\nrecusandae dignissimos dolor incidunt consequatur odio",
    "timestamp": 1671349813577,
    "likes": [
      1,
      2,
      3,
      4,
      5,
      6,
      7
    ]
  },
  {
    "authorId": 6,
    "id": 85,
    "body": "similique sed nisi voluptas iusto omnis\nmollitia et quo\nassumenda suscipit officia magnam sint sed tempora\nenim provident pariatur praesentium atque animi amet ratione",
    "timestamp": 1671349873577,
    "likes": [
      1,
      2,
      3,
      4
    ]
  },
  {
    "authorId": 2,
    "id": 86,
    "body": "quasi excepturi consequatur iste autem temporibus sed molestiae beatae\net quaerat et esse ut\nvoluptatem occaecati et vel explicabo autem\nasperiores pariatur deserunt optio",
    "timestamp": 1671349933577,
    "likes": [
      1
    ]
  },
  {
    "authorId": 2,
    "id": 87,
    "body": "eos et molestiae\nnesciunt ut a\ndolores perspiciatis repellendus repellat aliquid\nmagnam sint rem ipsum est",
    "timestamp": 1671349993577,
    "likes": [
      1,
      2,
      3,
      4,
      5,
      6
    ]
  },
  {
    "authorId": 1,
    "id": 88,
    "body": "consequatur omnis est praesentium\nducimus non iste\nneque hic deserunt\nvoluptatibus veniam cum et rerum sed",
    "timestamp": 1671350053577,
    "likes": [
      1,
      2,
      3,
      4
    ]
  },
  {
    "authorId": 9,
    "id": 89,
    "body": "repellat aut aperiam totam temporibus autem et\narchitecto magnam ut\nconsequatur qui cupiditate rerum quia soluta dignissimos nihil iure\ntempore quas est",
    "timestamp": 1671350113577,
    "likes": [
      1,
      2,
      3,
      4,
      5
    ]
  },
  {
    "authorId": 8,
    "id": 90,
    "body": "minus omnis soluta quia\nqui sed adipisci voluptates illum ipsam voluptatem\neligendi officia ut in\neos soluta similique molestias praesentium blanditiis",
    "timestamp": 1671350173577,
    "likes": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8
    ]
  },
  {
    "authorId": 4,
    "id": 91,
    "body": "libero voluptate eveniet aperiam sed\nsunt placeat suscipit molestias\nsimilique fugit nam natus\nexpedita consequatur consequatur dolores quia eos et placeat",
    "timestamp": 1671350233577,
    "likes": [
      1,
      2,
      3,
      4,
      5,
      6,
      7
    ]
  },
  {
    "authorId": 4,
    "id": 92,
    "body": "aut et excepturi dicta laudantium sint rerum nihil\nlaudantium et at\na neque minima officia et similique libero et\ncommodi voluptate qui",
    "timestamp": 1671350293577,
    "likes": [
      1,
      2,
      3
    ]
  },
  {
    "authorId": 2,
    "id": 93,
    "body": "dolorem quibusdam ducimus consequuntur dicta aut quo laboriosam\nvoluptatem quis enim recusandae ut sed sunt\nnostrum est odit totam\nsit error sed sunt eveniet provident qui nulla",
    "timestamp": 1671350353577,
    "likes": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8
    ]
  },
  {
    "authorId": 7,
    "id": 94,
    "body": "aspernatur expedita soluta quo ab ut similique\nexpedita dolores amet\nsed temporibus distinctio magnam saepe deleniti\nomnis facilis nam ipsum natus sint similique omnis",
    "timestamp": 1671350413577,
    "likes": [
      1,
      2,
      3
    ]
  },
  {
    "authorId": 6,
    "id": 95,
    "body": "earum voluptatem facere provident blanditiis velit laboriosam\npariatur accusamus odio saepe\ncumque dolor qui a dicta ab doloribus consequatur omnis\ncorporis cupiditate eaque assumenda ad nesciunt",
    "timestamp": 1671350473577,
    "likes": [
      1,
      2,
      3,
      4,
      5
    ]
  },
  {
    "authorId": 1,
    "id": 96,
    "body": "in non odio excepturi sint eum\nlabore voluptates vitae quia qui et\ninventore itaque rerum\nveniam non exercitationem delectus aut",
    "timestamp": 1671350533577,
    "likes": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8
    ]
  },
  {
    "authorId": 1,
    "id": 97,
    "body": "eum non blanditiis soluta porro quibusdam voluptas\nvel voluptatem qui placeat dolores qui velit aut\nvel inventore aut cumque culpa explicabo aliquid at\nperspiciatis est et voluptatem dignissimos dolor itaque sit nam",
    "timestamp": 1671350593577,
    "likes": [
      1,
      2,
      3,
      4,
      5,
      6
    ]
  },
  {
    "authorId": 7,
    "id": 98,
    "body": "doloremque ex facilis sit sint culpa\nsoluta assumenda eligendi non ut eius\nsequi ducimus vel quasi\nveritatis est dolores",
    "timestamp": 1671350653577,
    "likes": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ]
  },
  {
    "authorId": 1,
    "id": 99,
    "body": "quo deleniti praesentium dicta non quod\naut est molestias\nmolestias et officia quis nihil\nitaque dolorem quia",
    "timestamp": 1671350713577,
    "likes": [
      1
    ]
  },
  {
    "authorId": 8,
    "id": 100,
    "body": "cupiditate quo est a modi nesciunt soluta\nipsa voluptas error itaque dicta in\nautem qui minus magnam et distinctio eum\naccusamus ratione error aut",
    "timestamp": 1671350773577,
    "likes": [
      3,
      4,
      7,
      1
    ]
  }
];

export default mockMessages;