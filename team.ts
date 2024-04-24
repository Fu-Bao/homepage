import KoreanTyper from './libs/KoreanTyper'
window.addEventListener("load", ()=>{
  const Typer = document.getElementById("Typer")!
  const TyperCursor = document.getElementById("TyperCursor")!

  const typerContents = [
    "재미있는",
    "흥미로운",
    "어울리는",
    "매력적인",
  ]
  const wait = (time:number):Promise<void>=>new Promise((r)=>setTimeout(r,time))
  async function typerAnimation() {
    let contentTyper:KoreanTyper
    let contentIndex = 0

    while (true) {
      contentIndex = ((contentIndex+1)%typerContents.length)
      contentTyper = new KoreanTyper(typerContents[contentIndex])

      while (contentTyper.isAvailable()) {
        Typer.innerText = contentTyper.getNextString()
        await wait(45)
      }
      TyperCursor.classList.add("blink")
      await wait(2000)
      Typer.classList.add("fade-out")
      await wait(500)
      Typer.classList.remove("fade-out")
      TyperCursor.classList.remove("blink")
    }
  }
  typerAnimation()

  type Member = {
    name:string,
    email:string,
    department:string,
    role:string,
    imageURI: string,
    iconURI: string,
    MBTI: string,
  }
  const members:Array<Member> = [
    {
      name: "류은재",
      email: "davin0710@man-lab.kr",
      role: "Team Leader",
      department: "Kumoh National Institute of Technology",
      imageURI: "/team/members/davin0710.webp",
      iconURI: "/team/verified.webp",
      MBTI: "ENFJ",
    },
    {
      name: "김지섭",
      email: "iam@man-lab.kr",
      role: "Develop Leader & Back-End Develop",
      department: "Kumoh National Institute of Technology",
      imageURI: "/team/members/iam.webp",
      iconURI: "/team/verified.webp",
      MBTI: "ESTP",
    },
    {
      name: "김민제",
      email: "admin@man-lab.kr",
      role: "Operation Leader & UI/UX Design",
      department: "Kumoh National Institute of Technology",
      imageURI: "/team/members/admin.webp",
      iconURI: "/team/verified.webp",
      MBTI: "ENTJ",
    },
    {
      name: "황수민",
      email: "dotori@man-lab.kr",
      role: "Mobile Developer",
      department: "Kumoh National Institute of Technology",
      imageURI: "/team/members/dotori.webp",
      iconURI: "/team/phone.webp",
      MBTI: "ENTP",
    },
    {
      name: "박기현",
      email: "pkh040708@man-lab.kr",
      role: "Search & Infrastructure",
      department: "Kumoh National Institute of Technology",
      imageURI: "/team/members/pkh040708.webp",
      iconURI: "/team/file.webp",
      MBTI: "ENFP",
    },
    {
      name: "윤동근",
      email: "ydgehd@man-lab.kr",
      role: "Back-End Developer",
      department: "Kumoh National Institute of Technology",
      imageURI: "/team/members/ydgehd.webp",
      iconURI: "/team/chest.webp",
      MBTI: "ESTP",
    },
    {
      name: "김채현",
      email: "chae@man-lab.kr",
      role: "SNS Marketer",
      department: "Kumoh National Institute of Technology",
      imageURI: "/team/members/chae.webp",
      iconURI: "/team/paper.webp",
      MBTI: "INFP",
    },
    {
      name: "정수인",
      email: "suin@man-lab.kr",
      role: "Search & Infrastructure",
      department: "Kumoh National Institute of Technology",
      imageURI: "/team/members/suin.webp",
      iconURI: "/team/file.webp",
      MBTI: "INFP",
    },
    {
      name: "류승빈",
      email: "mond24@man-lab.kr",
      role: "Front-End Developer",
      department: "Kumoh National Institute of Technology",
      imageURI: "/team/members/mond24.webp",
      iconURI: "/team/laptop.webp",
      MBTI: "ENFP",
    },
    {
      name: "안재범",
      email: "ajb@man-lab.kr",
      role: "Front-End Developer",
      department: "Kumoh National Institute of Technology",
      imageURI: "/team/members/ajb.webp",
      iconURI: "/team/laptop.webp",
      MBTI: "ISTP",
    },
    {
      name: "한영탁",
      email: "qwreey@man-lab.kr",
      role: "Front-End Developer",
      department: "Kumoh National Institute of Technology",
      imageURI: "/team/members/qwreey.webp",
      iconURI: "/team/laptop.webp",
      MBTI: "ENFP",
    },
  ]
  const tMemberCard = document.getElementById("tMemberCard")!
  const MemberGrid = document.getElementById("MemberGrid")!
  function createMemberCard(member: Member):Node {
    const clone:Node = (tMemberCard as any).content.cloneNode(true);

    (clone as Element).querySelector("#Name")!.textContent = member.name;
    ((clone as Element).querySelector("#Image") as HTMLImageElement)!.src = member.imageURI;
    ((clone as Element).querySelector("#Icon") as HTMLImageElement)!.src = member.iconURI;
    (clone as Element).querySelector("#Department")!.textContent = member.department;
    (clone as Element).querySelector("#Role")!.textContent = member.role;
    (clone as Element).querySelector("#Email")!.textContent = member.email;
    (clone as Element).querySelector("#MBTI")!.textContent = '#'+member.MBTI;

    return clone as Node
  }
  members.forEach(value=>MemberGrid.appendChild(createMemberCard(value)))
  
})
