<script>
import { Accordion, AccordionItem, Card } from "flowbite-svelte"

const mainBookmark = [
    {
      name: '広島市立大学',
      url: 'https://www.hiroshima-cu.ac.jp/',
      icon: '/assets/external/hcu.ico',
    },
    {
      name: 'UNIPA (PC)',
      url: 'https://ichipol.g.hiroshima-cu.ac.jp/uprx/ShibbolethAuthServlet',
      icon: '/assets/external/unipa.ico',
    },
    {
      name: 'UNIPA (SP)',
      url: 'https://ichipol.g.hiroshima-cu.ac.jp/uprx/MobileShibbolethAuthServlet',
      icon: '/assets/external/unipa.ico',
    },
    {
      name: 'UniText',
      url: 'https://app.d-text-service.jp/browser/start?uneidantai_ryakugo=MZ&soshiki_cd=hcity',
      icon: '/assets/external/unitext.ico',
    }
  ];

  const communicationToolsBookmark = [
    {
      name: 'Outlook',
      url: 'https://outlook.office.com/',
      icon: '/assets/external/outlook.ico',
    },
    {
      name: 'Teams',
      url: 'https://teams.microsoft.com/',
      icon: '/assets/external/teams.ico',
    },
    {
      name: 'Zoom',
      url: 'https://zoom.us/',
      icon: '/assets/external/zoom.ico',
    },
  ];

  const buildingBookmark = [
    {
      name: '情報処理センター',
      url: 'https://www.ipc.hiroshima-cu.ac.jp/',
      icon: '/assets/external/ipc.ico',
    },
    {
      name: '図書館',
      url: 'https://opac.lib.hiroshima-cu.ac.jp/',
      icon: '/assets/external/lib.ico',
    },
    {
      name: '知トラ',
      url: 'https://triathlon.hiroshima-cu.ac.jp/',
      icon: '/assets/external/tri.ico',
    },
  ];

  const gyuttoFuckBookmark = [
    {
      name: "ぎゅっとeⅡ",
      url: 'https://host.lang.hiroshima-cu.ac.jp/e-learning-2/',
      icon: '/assets/external/gyutto.ico'
    },
    {
      name: "ぎゅっとeⅣ",
      url: 'https://host.lang.hiroshima-cu.ac.jp/e-learning-4/',
      icon: '/assets/external/gyutto.ico'
    }
  ]

  const lectureBookmark = [
    {
      name: "時間割・集中講義日程",
      url: "https://www.hiroshima-cu.ac.jp/campuslife/c00025986/",
      icon: "/assets/external/hcu.ico"
    },
    {
      name: "教育課程・手引",
      url: "https://www.hiroshima-cu.ac.jp/campuslife/c00032402/",
      icon: "/assets/external/hcu.ico"
    },
    {
      name: "授業カレンダー",
      url: "https://www.hiroshima-cu.ac.jp/campuslife/c00048722/",
      icon: "/assets/external/hcu.ico"
    }
  ]

  const externalServiceBookmark = [
    {
      name: "くるけん",
      url: "https://kuruken.jp/",
      icon: '/assets/external/kuruken.ico'
    }
  ]

  const accordions = [
    {
      emoji: '🏫',
      value: '広島市立大学',
      bookmarkList: mainBookmark,
    },
    {
      emoji: '💬',
      value: 'コミュニケーションツール',
      bookmarkList: communicationToolsBookmark,
    },
    {
      emoji: '🏢',
      value: '施設・サービス',
      bookmarkList: buildingBookmark,
    },
    {
      emoji: '🔤',
      value: 'ぎゅっとe',
      bookmarkList: gyuttoFuckBookmark,
    },
    {
      emoji: '✏️',
      value: '履修関係',
      bookmarkList: lectureBookmark
    },
    {
      emoji: '🧩',
      value: '外部サービス',
      bookmarkList: externalServiceBookmark,
    }
  ];

</script>

<Accordion class="py-3">
  {#each accordions as accordion}
    <AccordionItem>
      <span slot="header">{ accordion.emoji } { accordion.value }</span>
      <div class="flex overflow-scroll">
        {#each accordion.bookmarkList as i }
          <Card class="w-4/12 max-w-sm text-center m-1 p-3" href={i.url}>
            <img src={i.icon} alt="" srcset="" class="w-12 p-2 m-auto">
            <span class="truncate">{i.name}</span>
          </Card>
        {/each}
      </div>
    </AccordionItem>
  {/each}
</Accordion>


