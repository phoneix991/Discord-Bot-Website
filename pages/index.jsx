import Link from "next/link";
import Image from "next/image";

export default function Index() {
	
  return (
    <>
      <div className="py-20 mb-30 max-w-3xl mx-auto">
        <div className="flex w-full justify-center">
      <img width="500" src="/data:image/jpeg;base64,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" />
      </div>
        <p className="animateHeader text-4xl font-extrabold text-center text-white">
          Phoneix
        </p>
        <p className="animateHeader text-white text-opacity-50 text-center mt-5">
       Phoneix ile kendi sunucunuzu yönetmeye ne dersiniz? Kendi özgür ortamınızı yaratın ve kendi çalma yönetim şeklinizi oluşturun, bu rahatlığı Phoneix ile yaşayın. 
	  </p>
        <div className="animateHeader mt-10 flex flex-wrap items-center justify-center gap-x-4">
  
            <Link href={"https://discord.com/oauth2/authorize?client_id=1255190954319544321&permissions=8&integration_type=0&scope=applications.commands+bot"}>
              <a
                className={
                  "flex items-center px-6 justify-center gap-x-2 shadow-lg shadow-amber-600/20 rounded-xl py-4 font-medium bg-gradient-to-bl from-amber-700 to-amber-500 hover:opacity-80 transition duration-200 text-white " 
                }
              >
          Phoneix'i Davet Et
              </a>
            </Link>
  <div className="py-10"></div>
  <Link href={"https://top.gg/bot/774043716797071371/vote"}>
  <a className={" px-6 justify-center gap-x-2 shadow-lg shadow-amber-600/20 rounded-xl py-4 font-medium bg-gradient-to-bl from-amber-700 to-amber-500 hover:opacity-80 transition duration-200 text-white " }>
Phoneix'e Oy Ver</a>
  </Link>
        </div>

        <div style={{ zIndex: '-1' }} className="hidden xl:block undrag pointer-events-none opacity-10 -left-[10vw] absolute top-[8vw] h-[35vw] flex-shrink-0 grayscale rotate-[1deg]">
        <Image width="600" height="600" src="/img/gift-left.png"  />
        </div>
        <div style={{ zIndex: '-1' }} className="hidden xl:block undrag opacity-10 pointer-events-none -right-[15vw] absolute top-[13vw] h-[90vw] grayscale -rotate-9">
        <Image  width="600" height="600" src="/img/gift-right.png"  />
        </div>
      </div>



      <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-y-0 lg:gap-x-12 py-24">
          <div className="col-span-4">
            <p className="text-white text-4xl font-bold" dangerouslySetInnerHTML={{ __html:"MusicMaker" }} />
            <p className="text-white text-md font-medium text-gray-500/75" dangerouslySetInnerHTML={{ __html: "How about creating the best environment to relax yourself with your own emotions?" }}/>
            <a href="https://discord.com/api/oauth2/authorize?client_id=774043716797071371&permissions=277028620608&scope=bot%20applications.commands" className={"mt-10 flex items-center px-4 justify-center gap-x-2 shadow-lg shadow-amber-600/20 cursor-pointer rounded-xl py-4 font-medium bg-gradient-to-r from-amber-700 to-amber-500 hover:opacity-80 transition duration-200 text-white"}>
              <i className="fab fa-discord mr-2" />Invite MusicMaker
            </a>
          </div>

          <div className="col-span-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
           
              <div>
                <div className="text-white">
                  <p className="text-xl font-semibold mt-5"><i className={`fa fa-cogs text-2xl text-amber-500`} /> Optimization</p>
                  <p className="text-gray-500 line-clamp-4">With fast and customizable settings specific to your server, MusicMaker gives you a musical pleasure to the fullest.</p>
                </div>
              </div>
              <div>
                <div className="text-white">
                  <p className="text-xl font-semibold mt-5"><i className={`fa fa-universal-access text-2xl text-amber-500`} /> Universal</p>
                  <p className="text-gray-500 line-clamp-4">A bot that supports multi-platform music playback. (Spotify, Souncloud, YouTube) | (It is a bot that complies with all copyrights and licenses.)</p>
                </div>
              </div>
              <div>
                <div className="text-white">
                  <p className="text-xl font-semibold mt-5"><i className={`fa fa-shield text-2xl text-amber-500`} /> Security</p>
                  <p className="text-gray-500 line-clamp-4">An open source safe bot that you can browse and help us develop.</p>
                </div>
              </div>
              <div>
                <div className="text-white">
                  <p className="text-xl font-semibold mt-5"><i className={`fa fa-ticket text-2xl text-amber-500`} /> Support</p>
                  <p className="text-gray-500 line-clamp-4">With our best teammates, we provide the fastest response to anyone who needs help.</p>
                </div>
              </div>
          </div>
      </div>



      <div className="flex flex-row w-full h-auto lg:h-56 my-14 lg:my-40 bg-gradient-to-br lg:px-30 from-neutral-900/90 flex items-center justify-start to-neutral-900/50 rounded-lg p-1 shadow-md">
              <>
                <div className="lg:mx-4 lg:p-8 py-4 lg:py-16 flex items-center justify-center flex-col text-center w-full lg:w-auto lg:text-left lg:flex-none">
                  <img src="https://media.discordapp.net/attachments/907378577253744640/1176892776877666325/image.png"  width="256" className="lg:hidden rounded-xl mb-5 shadow-xl shadow-black" />
                  <p className="text-3xl text-white font-semibold">Best Your Bot</p>
                  <p className="text-md text-white font-medium text-gray-500 line-clamp-5">Are you ready to throw the best parties with MusicMaker, the best and most up-to-date bot?</p>
                </div>
                <img src="https://media.discordapp.net/attachments/907378577253744640/1176892776877666325/image.png" className="hidden lg:block rounded-xl perspective-right shadow-xl shadow-black" />
              </>
      
        </div>

      </>
  )
}
