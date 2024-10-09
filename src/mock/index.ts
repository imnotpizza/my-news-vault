import { TBingNewsAPIRes } from '@/types';

export const mockBingNewsRes: TBingNewsAPIRes = {
  readLink: 'https://api.bing.microsoft.com/api/v7/news/search?q=undefined',
  queryContext: {
    originalQuery: 'undefined',
    adultIntent: false,
  },
  totalEstimatedMatches: 1940,
  sort: [
    {
      name: 'Best match',
      id: 'relevance',
      isSelected: true,
      url: 'https://api.bing.microsoft.com/api/v7/news/search?q=undefined',
    },
    {
      name: 'Most recent',
      id: 'date',
      isSelected: false,
      url: 'https://api.bing.microsoft.com/api/v7/news/search?q=undefined&sortby=date',
    },
  ],
  value: [
    {
      name: '17 Walmart Items Retirees Should Stock Up on Before Winter Hits',
      url: 'https://finance.yahoo.com/news/17-walmart-items-retirees-stock-130152895.html',
      image: {
        thumbnail: {
          contentUrl: 'https://www.bing.com/th?id=OVFT.9O4PeqTM_ZcS0R_CsKA9zC&pid=News',
          width: 700,
          height: 393,
        },
      },
      description:
        "As the days get shorter and the nights chillier, it's a great time to stock up for winter. Retirees should especially consider preparing their homes and stocking up on essential items to stay",
      about: [
        {
          readLink:
            'https://api.bing.microsoft.com/api/v7/entities/a8dbcd8f-fe22-fdb9-ca9d-f5c9f877a181',
          name: 'Walmart',
        },
      ],
      provider: [
        {
          _type: 'Organization',
          name: 'YAHOO!Finance',
          image: {
            thumbnail: {
              contentUrl: 'https://www.bing.com/th?id=ODF.fJDJ4f2BFbmOkQx_rnDw3Q&pid=news',
            },
          },
        },
      ],
      datePublished: '2024-09-23T13:01:00.0000000Z',
    },
    {
      name: 'Mental Health Minute: Local artists release song centered on emotional well-being',
      url: 'https://www.msn.com/en-us/health/other/mental-health-minute-local-artists-release-song-centered-on-emotional-well-being/ar-AA1r8WM4',
      image: {
        thumbnail: {
          contentUrl: 'https://www.bing.com/th?id=OVFT.qLhpCKpoUoZvoWqJDG-y-i&pid=News',
          width: 700,
          height: 393,
        },
      },
      description:
        'Talking about mental health can be difficult, whether with other people or within yourself. That’s why some people turn to music as an outlet in difficult times and a group of local artists recently released a music video for their song focused on emotional well-being in this week’s mental health minute.',
      about: [
        {
          readLink:
            'https://api.bing.microsoft.com/api/v7/entities/ee19b8d7-717b-e095-15f2-bb954f520526',
          name: 'Twin Falls, Idaho',
        },
      ],
      mentions: [
        {
          name: 'Mental health',
        },
        {
          name: 'Emotional well-being',
        },
        {
          name: 'University of Washington School of Medicine',
        },
      ],
      provider: [
        {
          _type: 'Organization',
          name: 'Twin Falls KMVT on MSN.com',
          image: {
            thumbnail: {
              contentUrl: 'https://www.bing.com/th?id=ODF._YsRPzT4y6lwbZR-FHKL0A&pid=news',
            },
          },
        },
      ],
      datePublished: '2024-09-24T23:14:55.0000000Z',
    },
    {
      name: 'Republican-led group sues to block Georgia rule requiring hand count of ballots',
      url: 'https://abcnews.go.com/US/wireStory/republican-led-group-sues-block-georgia-rule-requiring-114245162',
      image: {
        thumbnail: {
          contentUrl: 'https://www.bing.com/th?id=OVFT.vZyNUbzkbg0kSLln4KgJqi&pid=News',
          width: 700,
          height: 393,
        },
      },
      description:
        'A Republican-led group is challenging Georgia’s new requirement that poll workers count the total number of ballots by hand',
      about: [
        {
          readLink:
            'https://api.bing.microsoft.com/api/v7/entities/84604bc7-2c47-4f8d-8ea5-b6ac8c018a20',
          name: 'Georgia',
        },
        {
          readLink:
            'https://api.bing.microsoft.com/api/v7/entities/1a92f3fa-61f9-4e89-b606-40c945cf18d1',
          name: 'Atlanta',
        },
      ],
      provider: [
        {
          _type: 'Organization',
          name: 'ABC',
          image: {
            thumbnail: {
              contentUrl: 'https://www.bing.com/th?id=ODF.-LMnifaGw_NvPvJr_0E9tA&pid=news',
            },
          },
        },
      ],
      datePublished: '2024-09-26T21:58:00.0000000Z',
      video: {
        name: 'Republican-led group sues to block Georgia rule requiring hand count of ballots',
        thumbnailUrl: 'https://www.bing.com/th?id=OVF.uwk161YKNHZF3ZmqB1yhag&pid=News',
        thumbnail: {
          width: 520,
          height: 292,
        },
      },
      category: 'Politics',
    },
    {
      name: 'Project 2025 and Immigration: How the Conservative Plan Would Detain and Criminalize Immigrants',
      url: 'https://www.yahoo.com/news/project-2025-immigration-conservative-plan-110000761.html',
      image: {
        thumbnail: {
          contentUrl: 'https://www.bing.com/th?id=OVFT.TqdJA3-730Z_3pIPmD3Lxy&pid=News',
          width: 700,
          height: 466,
        },
      },
      description:
        "Drew Angerer/Millions of American families across the United States could be torn apart by the anti-immigrant policies in the far-right's Project 2025 plan. If enacted, these draconian policies could strip legal status from hundreds of thousands of people who already live,",
      about: [
        {
          readLink:
            'https://api.bing.microsoft.com/api/v7/entities/f323ac3e-fafb-7d5d-56ee-ccc35e1a36c4',
          name: 'Deportation',
        },
        {
          readLink:
            'https://api.bing.microsoft.com/api/v7/entities/1936cb29-453d-4d90-e11e-263be2d614e3',
          name: 'Temporary protected status',
        },
        {
          readLink:
            'https://api.bing.microsoft.com/api/v7/entities/c88c8860-7909-e4bb-d904-c94bc77525a8',
          name: 'The Heritage Foundation',
        },
        {
          readLink:
            'https://api.bing.microsoft.com/api/v7/entities/84604bc7-2c47-4f8d-8ea5-b6ac8c018a20',
          name: 'Georgia',
        },
        {
          readLink:
            'https://api.bing.microsoft.com/api/v7/entities/cbcf556f-952a-4665-bb95-0500b27f9976',
          name: 'Oklahoma',
        },
      ],
      provider: [
        {
          _type: 'Organization',
          name: 'Yahoo',
          image: {
            thumbnail: {
              contentUrl: 'https://www.bing.com/th?id=ODF.UM0amhg3WAObCEGqc4w_Cw&pid=news',
            },
          },
        },
      ],
      datePublished: '2024-09-26T11:00:00.0000000Z',
      category: 'Politics',
    },
    {
      name: "Netanyahu says Israel 'settled the score' with Hezbollah chief's killing",
      url: 'https://www.philstar.com/world/2024/09/29/2388808/netanyahu-says-israel-settled-score-hezbollah-chiefs-killing',
      image: {
        thumbnail: {
          contentUrl: 'https://www.bing.com/th?id=OVFT.5zkHTr9CwVov6QMtctDm8y&pid=News',
          width: 700,
          height: 467,
        },
      },
      description:
        'Prime Minister Benjamin Netanyahu said Saturday that Israel had "settled the score" with the killing of Hezbollah chief Hassan Nasrallah in an air strike in Beirut.',
      about: [
        {
          readLink:
            'https://api.bing.microsoft.com/api/v7/entities/7ce1e366-2545-8063-de37-56de6515eb11',
          name: 'Benjamin Netanyahu',
        },
        {
          readLink:
            'https://api.bing.microsoft.com/api/v7/entities/1ffafed3-2b37-b871-c271-aa855d98449a',
          name: 'Israel',
        },
        {
          readLink:
            'https://api.bing.microsoft.com/api/v7/entities/16e64cd8-e667-d597-b9c8-1586cb18cf00',
          name: 'Hezbollah',
        },
        {
          readLink:
            'https://api.bing.microsoft.com/api/v7/entities/c7e635ff-eb31-9c7a-e35f-7f111fdce7da',
          name: 'Hassan Nasrallah',
        },
        {
          readLink:
            'https://api.bing.microsoft.com/api/v7/entities/afaaff6f-4112-4894-7e7e-2ca7359df5cf',
          name: 'Beirut',
        },
        {
          readLink:
            'https://api.bing.microsoft.com/api/v7/entities/7ceef3ec-7ea0-1e67-395d-06c4f3dff8b0',
          name: '1983 Beirut barracks bombings',
        },
      ],
      provider: [
        {
          _type: 'Organization',
          name: 'philstar.com',
          image: {
            thumbnail: {
              contentUrl: 'https://www.bing.com/th?id=ODF.uCx40FvxiSIbm4hvOsLRlA&pid=news',
            },
          },
        },
      ],
      datePublished: '2024-09-29T01:22:00.0000000Z',
      category: 'World',
    },
    {
      name: 'These 3 Little Words Can Unlock A Healthier Approach To Eating',
      url: 'https://www.msn.com/en-us/health/other/these-3-little-words-can-unlock-a-healthier-approach-to-eating/ar-AA1rvukW',
      description:
        'Add, not subtract’ is the golden ruleThe “add, not subtract” approach to eating encourages adding more wholesome ingredients like vegetables, whole grains and lean proteins into your snacks and meals,',
      mentions: [
        {
          name: 'Health',
        },
        {
          name: 'Food',
        },
        {
          name: 'Nutrition',
        },
      ],
      provider: [
        {
          _type: 'Organization',
          name: 'HuffPost on MSN.com',
          image: {
            thumbnail: {
              contentUrl: 'https://www.bing.com/th?id=ODF.rPjudoA7C5i-PdVAOVho9w&pid=news',
            },
          },
        },
      ],
      datePublished: '2024-10-01T07:00:07.0000000Z',
      category: 'Health',
    },
    {
      name: 'Trump Says Putin Wants War (That He Started) to End',
      url: 'https://www.msn.com/en-us/news/opinion/trump-says-putin-wants-war-that-he-started-to-end/ar-AA1rl5Qg',
      image: {
        thumbnail: {
          contentUrl: 'https://www.bing.com/th?id=OVFT.n4eVIJciWT8p5M1APO1XeC&pid=News',
          width: 700,
          height: 367,
        },
      },
      description:
        'Donald Trump held a photo opportunity with Ukrainian president Volodymyr Zelenskyy in an effort to bolster his case that he is a respected leader on the world stage who can end the war between Russia and Ukraine.',
      about: [
        {
          readLink:
            'https://api.bing.microsoft.com/api/v7/entities/1a466af2-ed23-25bd-794d-1ca925e4681b',
          name: 'Donald Trump',
        },
        {
          readLink:
            'https://api.bing.microsoft.com/api/v7/entities/9bae3411-f7b7-35a0-00a8-57f94c361da9',
          name: 'Volodymyr Zelenskyy',
        },
        {
          readLink:
            'https://api.bing.microsoft.com/api/v7/entities/ad599477-9e6d-4a0e-bab5-0edf9db7115a',
          name: 'Ukraine',
        },
        {
          readLink:
            'https://api.bing.microsoft.com/api/v7/entities/ef5cf66f-32b7-7271-286a-8e8313eda5c5',
          name: 'Kamala Harris',
        },
        {
          readLink:
            'https://api.bing.microsoft.com/api/v7/entities/60d41b9e-06ae-967b-bcc5-97ad4a13d29c',
          name: 'Vladimir Putin',
        },
      ],
      provider: [
        {
          _type: 'Organization',
          name: 'Intelligencer on MSN.com',
          image: {
            thumbnail: {
              contentUrl: 'https://www.bing.com/th?id=ODF.i30wyaVtfXJmLkKNx0Arrg&pid=news',
            },
          },
        },
      ],
      datePublished: '2024-09-27T18:13:03.0000000Z',
    },
    {
      name: "AS: Lewandowski is Barcelona's Highest Paid Player",
      url: 'https://www.telecomasia.net/news/football/as-lewandowski-is-barcelonaundefineds-highest-paid-player/',
      image: {
        thumbnail: {
          contentUrl: 'https://www.bing.com/th?id=OVFT.Vzedue8gK6wPeA0O3mqjjC&pid=News',
          width: 700,
          height: 350,
        },
      },
      description:
        'According to the Spanish publication AS, the highest-paid player at Catalan club Barcelona is Polish forward Robert Lewandowski, earning around 32 million euros per season.',
      about: [
        {
          readLink:
            'https://api.bing.microsoft.com/api/v7/entities/99699ef6-18ae-4ed8-fd73-ee8ae6e6079c',
          name: 'Diario AS',
        },
        {
          readLink:
            'https://api.bing.microsoft.com/api/v7/entities/d5173d0d-188f-c557-d46a-fbf1f89f03ce',
          name: 'Barcelona',
        },
        {
          readLink:
            'https://api.bing.microsoft.com/api/v7/entities/748c74b6-5461-46fe-a9f7-161c3ef096f3',
          name: 'Robert Lewandowski',
        },
        {
          readLink:
            'https://api.bing.microsoft.com/api/v7/entities/b75e5314-4575-8a14-f4c6-7e81bec14db5',
          name: 'Frenkie de Jong',
        },
        {
          readLink:
            'https://api.bing.microsoft.com/api/v7/entities/233ebb84-8b43-4687-bec2-233a1245f2dc',
          name: 'La Liga records and statistics',
        },
      ],
      provider: [
        {
          _type: 'Organization',
          name: 'telecomasia.net',
          image: {
            thumbnail: {
              contentUrl: 'https://www.bing.com/th?id=ODF.v26YqXx9FOUBpqiYEe8ahw&pid=news',
            },
          },
        },
      ],
      datePublished: '2024-09-30T08:45:00.0000000Z',
      category: 'Sports',
    },
    {
      name: 'Canada expands entry ban on Iranian officials',
      url: 'https://www.msn.com/en-us/news/world/canada-expands-entry-ban-on-iranian-officials/ar-AA1qDC4B',
      image: {
        thumbnail: {
          contentUrl: 'https://www.bing.com/th?id=OVFT.Ff-8XMakrFAXEaN-ctompS&pid=News',
          width: 700,
          height: 466,
        },
      },
      description:
        "Canada is expanding its entry ban on Iranian officials over the Middle Eastern country's involvement in terrorism and human rights violations.",
      about: [
        {
          readLink:
            'https://api.bing.microsoft.com/api/v7/entities/370ed614-32e1-4326-a356-dc0a7dd56aaa',
          name: 'Canada',
        },
        {
          readLink:
            'https://api.bing.microsoft.com/api/v7/entities/502b5268-992d-26c9-a0d8-6f206338406e',
          name: 'Iran',
        },
        {
          readLink:
            'https://api.bing.microsoft.com/api/v7/entities/7b3b2d4b-46e3-c8e2-9149-708d43d3e9fc',
          name: 'Dominic LeBlanc',
        },
        {
          readLink:
            'https://api.bing.microsoft.com/api/v7/entities/ba38540f-9717-0b74-0719-ee8f77421935',
          name: 'Public Safety Canada',
        },
      ],
      provider: [
        {
          _type: 'Organization',
          name: ' UPI News on MSN.com',
          image: {
            thumbnail: {
              contentUrl: 'https://www.bing.com/th?id=ODF.cpo3ek4OYDsinkv1bzpa2Q&pid=news',
            },
          },
        },
      ],
      datePublished: '2024-09-16T06:42:58.0000000Z',
      category: 'World',
    },
    {
      name: "Winding down the Green Line: Councillor Sharp's thoughts",
      url: 'https://www.calgary.ca/council/ward-1/ward-1-topics/winding-down-the-green-line--councillor-sharp-s-thoughts0.html',
      image: {
        thumbnail: {
          contentUrl: 'https://www.bing.com/th?id=OVFT.lyOqFVx6_EqwGSdrx6G6jS&pid=News',
          width: 700,
          height: 466,
        },
      },
      description:
        'Councillor Sharp believes that by winding down the project, Council is essentially abandoning the people of Calgary – both those who supported the project and those who did not. She thinks that winding down the project is neither financially nor reputationally responsible of Council to approve.',
      provider: [
        {
          _type: 'Organization',
          name: 'Calgary',
          image: {
            thumbnail: {
              contentUrl: 'https://www.bing.com/th?id=ODF.tjvplvzKkvzDA116Hx8wvg&pid=news',
            },
          },
        },
      ],
      datePublished: '2024-09-18T18:23:00.0000000Z',
    },
    {
      name: 'pdfFiller review: An overpriced, half-baked PDF editor for macOS',
      url: 'https://www.macworld.com/article/2471512/pdffiller-review.html',
      image: {
        thumbnail: {
          contentUrl: 'https://www.bing.com/th?id=OVFT.rBPzQK_Zfiigq5qJf5C_bC&pid=News',
          width: 700,
          height: 466,
        },
      },
      description:
        'pdfFiller offers apps on macOS, iOS, iPadOS, Windows, Android, and the web. So, no matter what device you’re working on, you likely will be able to access your documents just fine. Notably, a single subscription works across all platforms.',
      about: [
        {
          readLink:
            'https://api.bing.microsoft.com/api/v7/entities/a0d268ef-80dc-73e4-9ff9-98b3a233218a',
          name: 'macOS',
        },
        {
          readLink:
            'https://api.bing.microsoft.com/api/v7/entities/16e46246-2257-643b-488c-f1572d8a9817',
          name: 'iOS',
        },
        {
          readLink:
            'https://api.bing.microsoft.com/api/v7/entities/43c07a07-556b-d586-3315-e6296d4fe823',
          name: 'iPadOS',
        },
        {
          readLink:
            'https://api.bing.microsoft.com/api/v7/entities/16aeb6d9-9098-0a40-4970-8e46a4fcee12',
          name: 'Microsoft Windows',
        },
        {
          readLink:
            'https://api.bing.microsoft.com/api/v7/entities/cd479382-d340-5848-c99d-ed371b00b752',
          name: 'Android',
        },
      ],
      provider: [
        {
          _type: 'Organization',
          name: 'Macworld',
          image: {
            thumbnail: {
              contentUrl: 'https://www.bing.com/th?id=ODF.7OJiqzAwiIgskKiVkww2hQ&pid=news',
            },
          },
        },
      ],
      datePublished: '2024-09-27T15:19:00.0000000Z',
      category: 'ScienceAndTechnology',
    },
    {
      name: 'Wall Street Lunch: Big Banks Go Nuclear',
      url: 'https://seekingalpha.com/article/4722755-wall-street-lunch-big-banks-pledge-support-for-nuclear-energy',
      image: {
        thumbnail: {
          contentUrl: 'https://www.bing.com/th?id=OVFT.ZxC_s2EhkufNqHbicJ18RS&pid=News',
          width: 700,
          height: 466,
        },
      },
      description:
        "Fourteen of the world's biggest banks and financial institutions will pledge increased support for nuclear energy in a bid to unlock financing for the industry.",
      about: [
        {
          readLink:
            'https://api.bing.microsoft.com/api/v7/entities/3a122b35-1935-8240-5573-7df3a915e198',
          name: 'Bank of America',
        },
        {
          readLink:
            'https://api.bing.microsoft.com/api/v7/entities/9cec1ad2-91b5-1585-e8b3-935fcd91d29e',
          name: 'Goldman Sachs',
        },
        {
          readLink:
            'https://api.bing.microsoft.com/api/v7/entities/24c73f43-b4f4-c70c-3903-5ab6eca64dc4',
          name: 'Nuclear power',
        },
        {
          readLink:
            'https://api.bing.microsoft.com/api/v7/entities/a8df62f4-3525-88a1-dc91-2e6d35b1e5ed',
          name: 'J.P. Morgan & Co.',
        },
        {
          readLink:
            'https://api.bing.microsoft.com/api/v7/entities/ea101481-b5d2-4796-39f9-afbb5cda2f5e',
          name: 'Nike, Inc.',
        },
        {
          readLink:
            'https://api.bing.microsoft.com/api/v7/entities/62f76d34-80fb-b5a5-d0b6-5b6a250b4558',
          name: 'Greater China',
        },
        {
          readLink:
            'https://api.bing.microsoft.com/api/v7/entities/9bc7a13e-de9b-826a-2190-a070f25a30c7',
          name: 'Europe, the Middle East and Africa',
        },
        {
          readLink:
            'https://api.bing.microsoft.com/api/v7/entities/a093e9b9-90f5-a3d5-c4b8-5855e1b01f85',
          name: 'Microsoft',
        },
        {
          readLink:
            'https://api.bing.microsoft.com/api/v7/entities/6ddd2790-ec93-4707-36c5-63804d27da03',
          name: 'Spotify',
        },
        {
          readLink:
            'https://api.bing.microsoft.com/api/v7/entities/e62c1105-cc06-1701-da1d-d91d60486d5d',
          name: 'Carbon neutrality',
        },
        {
          readLink:
            'https://api.bing.microsoft.com/api/v7/entities/03a08fb0-b340-cd39-d5da-0b5aeda6243f',
          name: "McDonald's",
        },
      ],
      provider: [
        {
          _type: 'Organization',
          name: 'Seeking Alpha',
          image: {
            thumbnail: {
              contentUrl: 'https://www.bing.com/th?id=ODF.T3WKS_yw6iQ2VstDFu9FMw&pid=news',
            },
          },
        },
      ],
      datePublished: '2024-09-23T17:13:00.0000000Z',
      category: 'Business',
    },
    {
      name: 'Megalopolis Has Already Won',
      url: 'https://www.msn.com/en-gb/movies/news/megalopolis-has-already-won/ar-AA1rknUd',
      image: {
        thumbnail: {
          contentUrl: 'https://www.bing.com/th?id=OVFT.K7EafwefKlodwKKXhJ__aS&pid=News',
          width: 700,
          height: 368,
        },
      },
      description:
        'Cesar, a visionary but self-absorbed architect, spends much of the movie monologuing, and the substance he’s pioneered, Megalon, has vague, undefined properties; it’s more magic than science. And yet, the conversation about the future that the film ...',
      about: [
        {
          readLink:
            'https://api.bing.microsoft.com/api/v7/entities/b3ecd55d-e207-0ac7-c307-d7dcc7d2fdcb',
          name: 'Megalopolis',
        },
        {
          readLink:
            'https://api.bing.microsoft.com/api/v7/entities/1d3c43f8-0878-7ec4-6081-f865adf61610',
          name: 'Francis Ford Coppola',
        },
        {
          readLink:
            'https://api.bing.microsoft.com/api/v7/entities/cd373d8d-6708-e583-2a77-92d358d2038c',
          name: 'Cannes',
        },
      ],
      mentions: [
        {
          name: 'Megalopolis',
        },
        {
          name: "Hearts of Darkness: A Filmmaker's Apocalypse",
        },
        {
          name: 'Francis Ford Coppola',
        },
      ],
      provider: [
        {
          _type: 'Organization',
          name: 'Vulture.com on MSN.com',
        },
      ],
      datePublished: '2024-09-27T14:28:51.0000000Z',
      category: 'Entertainment',
    },
    {
      name: 'Fearless Fund settles DEI fight and shuts down grant program for Black women',
      url: 'https://www.msn.com/en-us/news/us/fearless-fund-settles-dei-fight-and-shuts-down-grant-program-for-black-women/ar-AA1qpgHp',
      image: {
        thumbnail: {
          contentUrl: 'https://www.bing.com/th?id=OVFT.qK-2BJ4nwWz0qEDelrikzS&pid=News',
          width: 700,
          height: 466,
        },
      },
      description:
        'Fearless Fund is ending its Fearless Strivers grant program for Black women to settle a closely watched case challenging corporate DEI efforts.',
      about: [
        {
          readLink:
            'https://api.bing.microsoft.com/api/v7/entities/307cbc52-c9c4-85d7-04b1-22d35efa2f02',
          name: 'United States Court of Appeals for the Eleventh Circuit',
        },
        {
          readLink:
            'https://api.bing.microsoft.com/api/v7/entities/0bc903b5-1624-5a85-caf2-e939bb07f5f4',
          name: 'Affirmative action',
        },
      ],
      provider: [
        {
          _type: 'Organization',
          name: 'USA TODAY on MSN.com',
          image: {
            thumbnail: {
              contentUrl: 'https://www.bing.com/th?id=ODF.m1iod5ODNIyyKu23kGIllQ&pid=news',
            },
          },
        },
      ],
      datePublished: '2024-09-11T19:07:17.0000000Z',
      category: 'Politics',
    },
    {
      name: 'Wall Street Brunch: Meta Connect 2024',
      url: 'https://seekingalpha.com/article/4722562-wall-street-brunch-meta-connect-2024',
      image: {
        thumbnail: {
          contentUrl: 'https://www.bing.com/th?id=OVFT.1r6h7BolHKoLDxV2KbInVS&pid=News',
          width: 700,
          height: 466,
        },
      },
      description:
        "Meta CEO Zuckerberg's speech and Southwest's Investor Day highlight events of the week. Fed's favorite inflation gauge seen rising. Micron earnings will grab AI attention.",
      about: [
        {
          readLink:
            'https://api.bing.microsoft.com/api/v7/entities/3b67aeab-bd5d-48f1-7389-067c8c73507c',
          name: 'Southwest Airlines',
        },
        {
          readLink:
            'https://api.bing.microsoft.com/api/v7/entities/99f62b54-ce70-c034-e1af-9134c6f06a24',
          name: 'Micron Technology',
        },
        {
          readLink:
            'https://api.bing.microsoft.com/api/v7/entities/8384551e-5183-0398-4077-98637cb9c7a9',
          name: 'Costco',
        },
        {
          readLink:
            'https://api.bing.microsoft.com/api/v7/entities/3c9835bf-9ac0-912c-cf4c-6d31e822fd9b',
          name: 'Nasdaq, Inc.',
        },
        {
          readLink:
            'https://api.bing.microsoft.com/api/v7/entities/ca412294-5641-492f-af5e-c0cae623d148',
          name: 'Mark Zuckerberg',
        },
      ],
      provider: [
        {
          _type: 'Organization',
          name: 'Seeking Alpha',
          image: {
            thumbnail: {
              contentUrl: 'https://www.bing.com/th?id=ODF.T3WKS_yw6iQ2VstDFu9FMw&pid=news',
            },
          },
        },
      ],
      datePublished: '2024-09-22T13:21:00.0000000Z',
      category: 'Business',
    },
    {
      name: "Taiwan TV show 'Zero Day' asks viewers to imagine reality of a Chinese invasion",
      url: 'https://www.lemonde.fr/en/m-le-mag/article/2024/09/24/in-taiwan-fiction-is-being-produced-to-prepare-minds-for-a-chinese-invasion_6727019_117.html',
      image: {
        thumbnail: {
          contentUrl: 'https://www.bing.com/th?id=OVFT.vkbaDvvGLgysY3Kiu9hwkC&pid=News',
          width: 700,
          height: 466,
        },
      },
      description:
        "TV series, scheduled to air in 2025, realistically recounts the first week of a Chinese-led offensive against the island. It's a dark scenario that has provoked strong political reactions.",
      about: [
        {
          readLink:
            'https://api.bing.microsoft.com/api/v7/entities/a2062e34-9038-4cf6-913e-70f770fdfe0b',
          name: 'Taiwan',
        },
        {
          readLink:
            'https://api.bing.microsoft.com/api/v7/entities/3ed8a7f5-84fd-40d2-b54d-e7ef293121ea',
          name: 'Shaanxi Y-8',
        },
        {
          readLink:
            'https://api.bing.microsoft.com/api/v7/entities/c6824e8e-5676-60a0-b26c-34f5567b7c36',
          name: 'Taiwan Strait',
        },
        {
          readLink:
            'https://api.bing.microsoft.com/api/v7/entities/5fcc3d97-0cf2-94e5-6dad-cd70e387bd69',
          name: 'China',
        },
      ],
      provider: [
        {
          _type: 'Organization',
          name: 'Le Monde.fr',
          image: {
            thumbnail: {
              contentUrl: 'https://www.bing.com/th?id=ODF.-vntt6CK5Oi1b8Z6bsa0XQ&pid=news',
            },
          },
        },
      ],
      datePublished: '2024-09-23T23:08:00.0000000Z',
      category: 'World',
    },
    {
      name: 'Used 2020 Ford undefined undefined Options',
      url: 'https://www.jdpower.com/cars/2020/ford/undefined/crew-cab-platinum-4wd/optional-equipment',
      description:
        'Standard equipment includes the features that come with this vehicle. Select Your Options Choose options to include in this vehicle value. For the most accurate pricing and values on new or used vehicles, select the optional features on the vehicle. These ...',
      provider: [
        {
          _type: 'Organization',
          name: 'jdpower',
        },
      ],
      datePublished: '2022-10-27T02:56:00.0000000Z',
    },
    {
      name: "What's The Difference Between Diet Dr Pepper And Dr Pepper Zero Sugar?",
      url: 'https://www.msn.com/en-us/health/other/what-s-the-difference-between-diet-dr-pepper-and-dr-pepper-zero-sugar/ar-AA1rpMQo',
      image: {
        thumbnail: {
          contentUrl: 'https://www.bing.com/th?id=OVFT.YmafemMiUZf_r6AcU_-ZHC&pid=News',
          width: 700,
          height: 393,
        },
      },
      description:
        'Dr Pepper fans are spoiled with a choice of varieties and flavors. But is there any real difference between its Diet and Zero Sugar offerings?',
      about: [
        {
          readLink:
            'https://api.bing.microsoft.com/api/v7/entities/fb45e739-aa06-9aa6-989f-30ad9e4ffb23',
          name: 'Dr Pepper',
        },
        {
          readLink:
            'https://api.bing.microsoft.com/api/v7/entities/eeb51942-955a-0b38-8337-ad5598151048',
          name: 'Pepsi',
        },
        {
          readLink:
            'https://api.bing.microsoft.com/api/v7/entities/318a79ec-3d5e-19c2-1610-679aac0e0454',
          name: 'Aspartame',
        },
        {
          readLink:
            'https://api.bing.microsoft.com/api/v7/entities/1a51c0a0-3f45-00cb-7097-2ec35ca7268c',
          name: 'Acesulfame potassium',
        },
      ],
      provider: [
        {
          _type: 'Organization',
          name: 'MSN',
          image: {
            thumbnail: {
              contentUrl: 'https://www.bing.com/th?id=ODF.4BOlCgk6n-7r-HoIT8JzUA&pid=news',
            },
          },
        },
      ],
      datePublished: '2024-09-29T16:31:00.0000000Z',
    },
    {
      name: 'Forget F-22, F-35 or NGAD: What a 7th Generation Fighter Could Be Like (In 2070)',
      url: 'https://www.msn.com/en-ca/news/technology/forget-f-22-f-35-or-ngad-what-a-7th-generation-fighter-could-be-like-in-2070/ar-BB1lYgGn',
      image: {
        thumbnail: {
          contentUrl: 'https://www.bing.com/th?id=OVFT.OHl_KUDifit0SwNK6pll8S&pid=News',
          width: 700,
          height: 394,
        },
      },
      description:
        'The development of 7th-generation fighter jets remains speculative as current efforts focus on 6th-generation technology. While military aviation has evolved through key generational advancements like stealth,',
      about: [
        {
          readLink:
            'https://api.bing.microsoft.com/api/v7/entities/3ffb644a-bc45-3a9a-66ff-629fe89acbde',
          name: 'Stealth',
        },
        {
          readLink:
            'https://api.bing.microsoft.com/api/v7/entities/e0bbe50c-dfd4-aaa9-4244-250d922ec87d',
          name: 'Sensor fusion',
        },
        {
          readLink:
            'https://api.bing.microsoft.com/api/v7/entities/bec2fad5-a954-bd3c-db38-a2ba702a9e8f',
          name: 'Supercruise',
        },
        {
          readLink:
            'https://api.bing.microsoft.com/api/v7/entities/9d99fb44-edac-0e03-1579-19d8d8591a49',
          name: 'Artificial intelligence',
        },
        {
          readLink:
            'https://api.bing.microsoft.com/api/v7/entities/c08ebf20-5316-7d66-4f51-a1dc8c3781d9',
          name: '3D printing',
        },
      ],
      provider: [
        {
          _type: 'Organization',
          name: 'MSN',
          image: {
            thumbnail: {
              contentUrl: 'https://www.bing.com/th?id=ODF.ZAd6wlzI7jOepdw9Su7EHw&pid=news',
            },
          },
        },
      ],
      datePublished: '2024-09-27T15:29:00.0000000Z',
      category: 'ScienceAndTechnology',
    },
    {
      name: 'How artist Olafur Eliasson is about to take over London, Berlin, Seoul and New York',
      url: 'https://www.yahoo.com/news/artist-olafur-eliasson-over-london-101329962.html',
      image: {
        thumbnail: {
          contentUrl: 'https://www.bing.com/th?id=OVFT.8qqSF3VnsiUiO0NSRiO6oC&pid=News',
          width: 700,
          height: 393,
        },
      },
      description:
        'Icelandic-Danish artist Olafur Eliasson is set to take over some of the world’s biggest public spaces in his most impressive installation piece yet.',
      about: [
        {
          readLink:
            'https://api.bing.microsoft.com/api/v7/entities/76d30040-56c6-e1a5-8190-71e6d71fe9de',
          name: 'Olafur Eliasson',
        },
        {
          readLink:
            'https://api.bing.microsoft.com/api/v7/entities/669b47ba-40b4-0147-3657-a7dd0861132c',
          name: 'Seoul',
        },
        {
          readLink:
            'https://api.bing.microsoft.com/api/v7/entities/8433461f-5e04-e3e0-7187-5c60405c07cc',
          name: 'Piccadilly Circus',
        },
        {
          readLink:
            'https://api.bing.microsoft.com/api/v7/entities/9de831cf-8dc6-21a4-8e5f-5135600e052c',
          name: 'Kurfürstendamm',
        },
        {
          readLink:
            'https://api.bing.microsoft.com/api/v7/entities/c2120128-39f5-6276-8a48-0e7d7419a489',
          name: 'Times Square',
        },
      ],
      provider: [
        {
          _type: 'Organization',
          name: 'Yahoo',
          image: {
            thumbnail: {
              contentUrl: 'https://www.bing.com/th?id=ODF.UM0amhg3WAObCEGqc4w_Cw&pid=news',
            },
          },
        },
      ],
      datePublished: '2024-09-27T12:57:00.0000000Z',
    },
  ],
};
