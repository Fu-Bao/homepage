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
  }
  const members:Array<Member> = [
    {
      name: "김민제",
      email: "rlaalswp0405@gmail.com",
      role: "Operation Leader & UI/UX Design",
      department: "Kumoh National Institute of Technology",
      imageURI: "/team/members/rlaalswp0405.webp",
      iconURI: "/team/verified.webp",
    },
    {
      name: "류은재",
      email: "david01@gmail.com",
      role: "Team Leader",
      department: "Kumoh National Institute of Technology",
      imageURI: "/team/members/david01.webp",
      iconURI: "/team/verified.webp",
    },
    {
      name: "한영탁",
      email: "me@qwreey.moe",
      role: "Front-End Developer",
      department: "Kumoh National Institute of Technology",
      imageURI: "/team/members/qwreey.webp",
      iconURI: "/team/laptop.webp",
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

    return clone as Node
  }
  members.forEach(value=>MemberGrid.appendChild(createMemberCard(value)))
  
})
