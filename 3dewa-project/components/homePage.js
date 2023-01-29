import Link from "next/link";

export const HomePage = () => {
  return (
    <>
      <section className="header relative pt-16 items-center flex h-screen max-h-860-px">
        <div className="container items-center flex flex-wrap justify-between">
          <div className="w-full md:w-8/12 lg:w-[28rem] pl-10">
            <div className="pt-32 sm:pt-0">
              <h2 className="font-semibold text-4xl text-blueGray-600">
                Image 1500px X 1500px
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                Notus NextJS is Free and Open Source. It does not change any of
                the CSS from{" "}
                <a
                  href="https://tailwindcss.com/?ref=creativetim"
                  className="text-blueGray-600"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Tailwind CSS
                </a>
                . It features multiple HTML elements and it comes with dynamic
                components for ReactJS, Vue and Angular.
              </p>
            </div>
          </div>
        </div>
        <div className="pr-12">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            data-name="Layer 1"
            width="600"
            height="580.8104"
            viewBox="0 0 822.84179 580.8104"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            className="object-contain"
          >
            <path
              d="M812.05483,448.63709a186.53461,186.53461,0,0,1-5.0498,43.21972c-19.49024,81.88037-93.11035,142.78028-180.9502,142.78028-102.71972,0-186-83.28028-186-186A185.97746,185.97746,0,0,1,539.36489,284.037c.00977,0,.02-.00977.02979-.00977q7.56-4.00561,15.54-7.30029a187.03105,187.03105,0,0,1,93.06006-12.81006c2.71.32031,5.41016.7002,8.08008,1.13037q6.52515,1.06494,12.87988,2.56983,1.60474.35961,3.18018.77978c.21.05029.41016.11035.62012.16016s.40966.10009.60986.16015h.00977c.3999.1001.80029.19971,1.20019.31006.98.27,1.96.54,2.93994.82959q4.54542,1.29053,8.99024,2.83008c.46972.16016.92968.32031,1.3999.48.23975.09033.46973.17041.71.26025.25.08008.48975.16993.73975.25977a184.0015,184.0015,0,0,1,19.5,8.3501l-9.75-3.14014c31.19043,15.99024,58.19043,44.22022,80.72021,84.33008a5.00554,5.00554,0,0,1,9.16992-1.83984,4.7445,4.7445,0,0,1,.3501.66992,4.99973,4.99973,0,0,1-2.6001,6.58008.49845.49845,0,0,1-.10986.04l16.02,41.64991a7.74242,7.74242,0,0,1,3.33984.62988,14.71282,14.71282,0,0,1,1.37012-3.98975c.31982,1.37989.62012,2.77.90967,4.16993.1001.52.21045,1.02978.30029,1.5498v.01025q.82471,4.125,1.43994,8.33008c.04.23.07032.44971.10987.67969v.01025c.16015,1.1001.31005,2.21.45019,3.31983q1.10963,8.80517,1.39014,17.85986C812.02456,444.807,812.05483,446.71716,812.05483,448.63709Z"
              transform="translate(-188.57911 -159.5948)"
              fill="#f2f2f2"
            />
            <path
              d="M802.76851,419.30762c1.62232,41.51852,3.24666,83.10511,1.37347,124.64462-1.8602,41.25157-7.72921,82.20867-12.87082,123.14347l-8.737,69.5594h3c.00945-6.879-6.54988-12.933-13.47116-11.86862-6.61687,1.01755-11.09021,8.08915-9.6313,14.50383l2.74162-1.15584c-4.55873-9.19635-11.57929-21.08419-23.67731-19.64269-5.6856.67745-9.34891,4.9648-13.498,8.42337a31.786,31.786,0,0,1-32.26767,4.54223c-1.753-.7616-3.28227,1.82222-1.51416,2.59042a35.12415,35.12415,0,0,0,29.5019-.80123,32.89026,32.89026,0,0,0,6.40125-4.2101c2.0779-1.73208,3.94645-3.73466,6.16577-5.293,4.828-3.39008,10.49666-2.7365,15.2458.48891,5.329,3.61919,8.27814,9.82046,11.052,15.41625.782,1.57748,3.10493.44159,2.74162-1.15584a9.21589,9.21589,0,0,1,7.11719-10.74628c5.16327-.875,10.0994,3.84369,10.09244,8.90859-.00273,1.98578,2.76646,1.85934,3,0,5.18406-41.27268,10.55914-82.52671,15.50567-123.82857,2.43882-20.36343,4.57589-40.771,5.71836-61.25278,1.157-20.74316,1.38523-41.52841,1.1245-62.29894-.2929-23.33293-1.20314-46.652-2.11417-69.9672-.07518-1.92417-3.07556-1.93386-3,0Z"
              transform="translate(-188.57911 -159.5948)"
              fill="#ccc"
            />
            <path
              d="M942.95473,458.86707a549.21816,549.21816,0,0,1-55.0498,35.20019c-5.2002,2.85986-10.30029,5.48975-15.1001,7.71973-7.43994,3.46-14.16992,5.97021-19.43017,6.8999l-.00977.01025c-.77.14014-1.52.23975-2.23.31006-6.53027.62989-11.87988-3.29-16.24023-9.73-6.08008-8.96-10.25-22.80029-13.05957-36.08008-.56055-2.62011-1.06055-5.21-1.51026-7.74023-2.1001-11.68994-3.1499-22.02979-3.58008-26.90967a15.15853,15.15853,0,0,1-5.41992-2.8501v-.01025a9.05023,9.05023,0,0,1-.75-.6499,14.62278,14.62278,0,0,1-1.51025-1.64014,15.11611,15.11611,0,0,1-3.34961-9.52978,15.23771,15.23771,0,0,1,1.6499-6.89991v-.01025a15.2928,15.2928,0,1,1,26.27979,15.52l5.39013,13.16016.01026.00976,15.97949,38.98047v.00977l.17041.41015,59.02978-35.29L922.465,434.827l1.58984-.94971A15.67108,15.67108,0,0,1,945.445,436.0072h.00976a15.71674,15.71674,0,0,1-2.5,22.85987Z"
              transform="translate(-188.57911 -159.5948)"
              fill="#ffb6b6"
            />
            <path
              d="M805.93471,420.327l-1.87011.70019q-1.93506-5.18994-3.93994-10.21C772.38491,341.327,735.26479,296.267,689.59487,276.62732c-.68994-.30029-1.37988-.59033-2.08008-.87012-.92968-.39013-1.87011-.77-2.81006-1.12011-1.52-.6001-3.06005-1.16016-4.60009-1.69q-3.08936-1.06494-6.19-1.97021c-.5-.1499-1.00976-.29981-1.50976-.42969-1.79-.51025-3.56982-.98-5.35986-1.39014-42.73047-10.23-86.49024.43018-127.65039,14.87012-.00977,0-.02.00977-.02979.00977-12.56982,4.41015-24.91016,9.18017-36.89014,13.81006-44.2998,17.12011-83.25,32.16992-110.3999,19.16015-1.04-.49023-2.06006-1.03027-3.06006-1.61035-1.08008-.62988-2.1499-1.30957-3.18994-2.02978-.12988-.08985-.26025-.18018-.37988-.27979-1.12012-.80029-2.22022-1.66016-3.29-2.58008a45.64855,45.64855,0,0,1-4.47022-4.41992c-.27-.30029-.54-.6001-.7998-.91016-.0498-.07031-.11035-.14013-.16016-.20019a47.98681,47.98681,0,0,1-5.35986-7.98c-9.37988-17.3999-8.93994-40.3999-8.51025-62.79981.46-24.24023.91015-47.29-11.34961-60.70019a30.456,30.456,0,0,0-5.94043-5.06006,33.04088,33.04088,0,0,0-6.98975-3.48c-26.37012-9.56006-71.71,9.25-135.04,56.05029-2.1001,1.54981-4.21,3.12989-6.3501,4.73975l-1.21-1.6001c2.14014-1.60986,4.26026-3.19971,6.36036-4.75,29.9497-22.11963,56.11962-38.15967,77.8999-47.75,24.8999-10.96973,44.77-13.80957,59.23-8.48975a35.115,35.115,0,0,1,7.1997,3.6001,33.53017,33.53017,0,0,1,6.16016,5.17969c12.96,13.91992,12.5,37.5,12.02979,62.29-.39991,21.07031-.81983,42.68017,7.05029,59.37012a47.31389,47.31389,0,0,0,6.61963,10.41015c.16015.18994.33008.37989.49023.56983a45.2483,45.2483,0,0,0,4.4502,4.41992c.92969.81006,1.88965,1.56006,2.87012,2.27a39.83281,39.83281,0,0,0,3.5498,2.31006,41.25082,41.25082,0,0,0,4.23975,2.16015c26.39013,11.64014,64.43994-3.07031,107.63037-19.76025,17.11963-6.62012,34.93994-13.5,53.17968-19.25,30.31006-9.56006,61.78028-15.98975,93.06006-12.81006,2.5.24023,5.01026.56006,7.51026.9502,4.50976.68017,9.00976,1.56982,13.5,2.70019,1.0498.25977,2.08984.53955,3.12988.82959.41016.1001.81006.22022,1.21973.34033.40039.10987.81.21973,1.21.33985,2.06006.60986,4.13037,1.27,6.19043,1.98,1.75.60986,3.5,1.25,5.23,1.91992.62988.25,1.27.5,1.90967.77.57031.23,1.15039.47021,1.72021.71,3.19971,1.36035,6.37012,2.83008,9.48975,4.43994,31.19043,15.99024,58.19043,44.22022,80.72021,84.33008,1,1.78027,2,3.59033,2.98,5.43017q3.46509,6.43506,6.77,13.25977,6.55518,13.47,12.51026,28.43994,1.36449,3.39039,2.67968,6.87012C805.15493,418.2572,805.54507,419.287,805.93471,420.327Z"
              transform="translate(-188.57911 -159.5948)"
              fill="#ccc"
            />
            <circle cx="8.00203" cy="65.35075" r="8" fill="#6c63ff" />
            <circle cx="157.53505" cy="8.00203" r="8" fill="#6c63ff" />
            <rect
              x="383.40428"
              y="256.55851"
              width="2.00007"
              height="113.71903"
              transform="matrix(0.67755, -0.73548, 0.73548, 0.67755, -295.13916, 224.19035)"
              fill="#3f3d56"
            />
            <circle cx="154.00619" cy="115.29857" r="5" fill="#6c63ff" />
            <path
              d="M425.005,218.2572,411.52456,228.517l-18.44971,14.05029a46.37324,46.37324,0,0,0-17.80029,29.78955l-3.36963,21.24024-.54,3.3999-.41992,2.66015-.37012,2.37989L369.465,309.0072a2.29373,2.29373,0,0,0,3.93115,1.94727,7.97085,7.97085,0,0,1,7.34375-8.335c.52539-15.64209,9.0127-22.63428,21.875-24.87256l.12988-.1499-.08984.18017c2.05713,17.20069-3.12549,26.09766-13.91992,28.56006l-.26953.55371c.0874.167.17627.333.25244.50879a7.98676,7.98676,0,0,1-5.603,10.99512,2.2941,2.2941,0,0,0,.06982.62207,2.31747,2.31747,0,0,0,3.44,1.36035l2.31-1.43018,1.77-1.09033,1.37012-.84961,2.04981-1.27,24.47021-15.13037a45.248,45.248,0,0,0,20.12988-27.43994l5.79981-22.81006,4.18017-16.41992Z"
              transform="translate(-188.57911 -159.5948)"
              fill="#e6e6e6"
            />
            <circle cx="236.32882" cy="191.82951" r="5" fill="#6c63ff" />
            <path
              d="M856.175,490.02722l-1.15039-15.39013v-.00977l-.57959-7.73047a46.38953,46.38953,0,0,0-15.28028-31.1499l-.11962-.1001-.01026-.00976-27.43994-24.73a2.26061,2.26061,0,0,0-2.75976-.25,2.18578,2.18578,0,0,0-.56055.48,2.21069,2.21069,0,0,0-.41553.76367,7.98143,7.98143,0,0,1,2.584,10.65039l.88183,3.13574v.01025c9.15479,6.83594,11.38721,17.13135,8.41016,30.02979l.06006.20019-.1001-.16992c-11.76074-6.99463-18.79395-16.207-17.59961-29.27929a7.98528,7.98528,0,0,1-6.41992-9.53223,2.1903,2.1903,0,0,0-.65088-.09863,2.06032,2.06032,0,0,0-.59961.08007,2.25486,2.25486,0,0,0-1.71,2.16993l-.84033,37.58007a45.21768,45.21768,0,0,0,12.03027,31.83008l3.1001,3.34961,12.86963,13.94043L831.36489,518.247l22-9.54981.00977-.01025,4.06005-1.75977Z"
              transform="translate(-188.57911 -159.5948)"
              fill="#ccc"
            />
            <circle cx="192.71255" cy="150.47046" r="5.76318" fill="#6c63ff" />
            <circle cx="215.84936" cy="114.59268" r="4" fill="#3f3d56" />
            <polygon
              points="616.666 257.452 616.186 257.632 614.796 258.172 612.056 251.052 601.016 222.362 600.996 222.322 596.056 209.462 596.046 209.462 594.466 205.342 596.336 204.622 598.056 209.082 614.076 250.732 616.666 257.452"
              fill="#3f3d56"
            />
            <path
              d="M786.74477,368.63709a.49845.49845,0,0,1-.10986.04,5.03488,5.03488,0,0,1-2,.37989h-.01025a5.1293,5.1293,0,0,1-1.81983-.39991,5.00471,5.00471,0,0,1-2.62988-2.60986,4.94248,4.94248,0,0,1-.3501-2.82031,5.00554,5.00554,0,0,1,9.16992-1.83984,4.7445,4.7445,0,0,1,.3501.66992A4.99973,4.99973,0,0,1,786.74477,368.63709Z"
              transform="translate(-188.57911 -159.5948)"
              fill="#6c63ff"
            />
            <path
              d="M809.50583,420.84766a.28682.28682,0,0,1-.03878.08471v.0079a5.80624,5.80624,0,0,1-.81732,1.29507,6.1384,6.1384,0,0,1-2.30515,1.7427,6.20035,6.20035,0,0,1-3.16126.47813v-.00791a6.15385,6.15385,0,0,1-4.94988-3.66987,6.06666,6.06666,0,0,1-.40885-3.59307,6.141,6.141,0,0,1,3.601-4.51807c.108-.04631.22363-.09261.3313-.131.13139-.04631.2624-.09262.39342-.13139a6.42086,6.42086,0,0,1,1.11813-.22363,4.28692,4.28692,0,0,1,.43934-.023,5.96971,5.96971,0,0,1,2.57509.48565,6.2411,6.2411,0,0,1,1.40311.81732v.00791a5.17345,5.17345,0,0,1,.58618.50862v.0079a6.27487,6.27487,0,0,1,1.2721,1.88124A6.11982,6.11982,0,0,1,809.50583,420.84766Z"
              transform="translate(-188.57911 -159.5948)"
              fill="#6c63ff"
            />
            <circle cx="633.16076" cy="299.59967" r="4" fill="#3f3d56" />
            <polygon
              points="552.916 130.852 552.306 132.752 547.216 131.112 520.276 122.442 510.526 119.302 501.036 116.252 499.086 115.622 496.336 114.732 485.396 111.212 483.906 110.742 478.976 109.152 467.496 105.452 466.926 105.272 378.945 76.952 373.566 75.222 374.176 73.322 379.266 74.962 480.826 107.652 484.896 108.962 486.036 109.322 488.936 110.262 497.846 113.122 499.326 113.602 500.746 114.062 547.536 129.122 552.916 130.852"
              fill="#3f3d56"
            />
            <path
              d="M689.61489,274.45691a2.1876,2.1876,0,0,0-.26025-.77l-.02979-.02979a2.22954,2.22954,0,0,0-1.27-1.01025.59905.59905,0,0,0-.18017-.04h-.00245a7.98054,7.98054,0,0,1-7.68359,8.70459l-.00391.00586c.53418,14.78027-4.29834,25.59766-19.46,28.78955l-.12011.17041.06-.18994c-8.3081-14.15332.34278-24.52978,11.627-34.31982a8,8,0,0,1,2.60351-8.67188l-.00048-.0083a2.28627,2.28627,0,0,0-.93995-1.38037,2.25159,2.25159,0,0,0-2.75976.09033l-1.79,1.44971-.3999.32031-.0503.04981-1.3999,1.12988-.50976.41015-25.07032,20.29981a45.23073,45.23073,0,0,0-16.5,29.75L622.60464,342.577l-2.06983,16.81982,25.48975,12.56006,12.08008-11.88965,16.52-16.27a46.37674,46.37674,0,0,0,13.8999-31.80029l1.07031-35.36963.02-.78027.02979-.94A3.18689,3.18689,0,0,0,689.61489,274.45691Z"
              transform="translate(-188.57911 -159.5948)"
              fill="#ccc"
            />
            <circle cx="374.27" cy="75.18806" r="5" fill="#6c63ff" />
            <circle cx="552.21105" cy="130.88351" r="5" fill="#6c63ff" />
            <circle cx="470.78691" cy="154.27354" r="4" fill="#3f3d56" />
            <path
              d="M996.965,334.1571c-.4502-.5-.90039-.98-1.36035-1.46C984.29507,320.807,969.51479,313.7572,955.715,313.7572q-3.84009,0-7.3501.34961-14.53491,1.4253-23.25,8.76026-12.87012,10.83032-12.8999,34.39013c0,.87012-.0503,2.48975-.12988,4.63965-.51026,12.53027-2.37012,43.06006-4.04,47.58008-2.71,7.36035-5.06006,13.72021-1.56006,18.53027,2.03955,2.81006,6.0498,4.84961,12.31006,6.16992,1.1499.25,2.36962.46973,3.66992.64991a139.91014,139.91014,0,0,0,20.27,1.20019c.88965,0,1.77978,0,2.71-.02h.00976c3.21-.02,6.64014-.11035,10.28028-.25,8.50976-.33008,19.17968-1,28.75976-3.21h.01026c1.25-.28027,2.48-.6001,3.67968-.94043l.22022-.05957.1001-.20019a28.291,28.291,0,0,0,2.86963-11.16993,24.49988,24.49988,0,0,1,3.98,8.23975l.15039.57031.54-.25a25.87062,25.87062,0,0,0,10.61962-8.43994,27.05125,27.05125,0,0,0,4.54-12.99023C1012.57485,394.68689,1007.38491,345.77722,996.965,334.1571Z"
              transform="translate(-188.57911 -159.5948)"
              fill="#2f2e41"
            />
            <path
              d="M1000.33266,740.25412h-59.93l-10.05-49.69-3.26,49.69h-55.67c-.02872-36.82726-11.28529-77.84268,5.57158-111.67148.87684-1.75964,12.4809-4.14026.51838-5.15851l.69-2.35,1.09-3.76.69-2.36s2.696-2.25442.879-3.01855.92566-3.17874.92566-3.17874l9.71529-33.36271.91-3.14h69.37a101.54475,101.54475,0,0,1,11.01,12.16c1.13,1.44,2.31,3,3.52,4.68.84,1.19,1.71,2.44,2.58,3.75a125.99725,125.99725,0,0,1,17.1,37.6v.01q.915,3.435,1.62,7.03v.01c.42,2.13.79,4.29,1.07995,6.5.22,1.61.41,3.24.55005,4.89a112.10333,112.10333,0,0,1-.87,27.42Z"
              transform="translate(-188.57911 -159.5948)"
              fill="#2f2e41"
            />
            <path
              d="M932.61421,409.06464l33.016-1.70079,15.335,24.23123s28.85327,4.82389,26.85327,38.82389-35.10582,63.83515-35.10582,63.83515l25.41517,73.70571L995.67,614.9826l.31518,3.94332,3.35289,4.17612.3452,4.31886-2.97065,6.83322,4.03973,6.54282c-29.08362,7.26-48.70923-.12812-59.12457-21.78089-11.93805-29.79529-32.04376-32.63592-56.58313-20.8446l3.668-32.91733,4.53071-6.07552-2.53071-7.92448,3.8046-7.622,1.98385-24.21106s-21.70416-32.60744,3.21155-57.1669l10-17,11.18914-13.65128Z"
              transform="translate(-188.57911 -159.5948)"
              fill="#6c63ff"
            />
            <circle cx="760.44852" cy="207.64358" r="34.98425" fill="#ffb6b6" />
            <path
              d="M972.01479,323.7572h-34.25a40.20684,40.20684,0,0,0-12.6499-.89013,26.55213,26.55213,0,0,0-14.30029,5.52978c-6.12989,4.92041-9.50977,12.76025-9.50977,22.08008a45.7138,45.7138,0,0,0,.91992,8.87012l.06006.31.3003.08008q4.73949,1.21509,9.5,2.15967c.75976.15039,1.52978.30029,2.2998.44043,4.16016.76953,8.31982,1.37988,12.4502,1.81982l.22949.02979.17041-.1499a28.32567,28.32567,0,0,0,6.86963-9.71,24.42541,24.42541,0,0,1,.73047,9.97021l-.07032.54.54.02979q4.51465.25488,9.04.25a163.33982,163.33982,0,0,0,38.99024-4.75c.83984-.2002,1.66992-.41016,2.5-.62989l.37988-.10009V337.95691A14.2161,14.2161,0,0,0,972.01479,323.7572Z"
              transform="translate(-188.57911 -159.5948)"
              fill="#2f2e41"
            />
            <path
              d="M999.91468,320.79144a25.99024,25.99024,0,1,1-.38-7.77,24.67279,24.67279,0,0,0-10.99,4.42,14.91962,14.91962,0,0,1,11.19,3.19C999.79469,320.68146,999.85469,320.73145,999.91468,320.79144Z"
              transform="translate(-188.57911 -159.5948)"
              fill="#2f2e41"
            />
            <path
              d="M452.57729,254.11658a10.91342,10.91342,0,0,1-6.04492-1.83106c-19.19287-1.52881-31.76269-9.74414-37.52734-24.833a11.04248,11.04248,0,0,1-4.77442-7.332,10.91415,10.91415,0,0,1,2.09473-8.50879,11.21216,11.21216,0,0,1,15.1206-2.30761l2.02442,1.33984a10.86167,10.86167,0,0,1,1.8208-5.99023l.144-.21192a5.83536,5.83536,0,0,1,6.52295-2.3584,6.291,6.291,0,0,1,4.60694,5.77442,12.0419,12.0419,0,0,0,.18847,1.52344,11.49332,11.49332,0,0,0,16.97119,7.78906,6.42924,6.42924,0,0,1,6.27393-.05664,5.6456,5.6456,0,0,1,2.96924,4.81543,10.97386,10.97386,0,0,1-6.61914,10.47168l2.03418,1.34668a11.234,11.234,0,0,1,3.50488,15.26367,10.923,10.923,0,0,1-6.99219,4.85937A11.08371,11.08371,0,0,1,452.57729,254.11658Z"
              transform="translate(-188.57911 -159.5948)"
              fill="#3f3d56"
            />
            <path
              d="M641.43667,389.91834a5.93615,5.93615,0,0,1-1.73975-.2627,6.0499,6.0499,0,0,1-4.25683-5.05762l-.01856-.13476a11.4975,11.4975,0,0,0-18.2124-7.54,5.92607,5.92607,0,0,1-9.30078-3.77442,10.97745,10.97745,0,0,1,5.23535-11.2666l-2.50049-1.23242a11.038,11.038,0,0,1-5.66211-6.668,10.91537,10.91537,0,0,1,1.00244-8.707,11.209,11.209,0,0,1,14.70752-4.19922c17.38477-2.41406,30.66553,4.31055,40.04248,19.73242a11.03884,11.03884,0,0,1,5.6626,6.668,10.9147,10.9147,0,0,1-1.00293,8.70606,11.20976,11.20976,0,0,1-14.707,4.20019l-2.17774-1.07324a10.85163,10.85163,0,0,1-1.04931,6.17188,10.98248,10.98248,0,0,1-1.6333,2.43652A5.84809,5.84809,0,0,1,641.43667,389.91834Z"
              transform="translate(-188.57911 -159.5948)"
              fill="#3f3d56"
            />
            <path
              d="M836.09389,536.223a7.334,7.334,0,0,1-6.78711-4.35547l-.06689-.15136a10.85479,10.85479,0,0,1-.75293-6.2168l-2.55664,1.11133a11.00127,11.00127,0,0,1-14.55273-5.89551,11.2359,11.2359,0,0,1,6.104-14.42187c7.1626-16.53907,20.293-23.10791,40.62256-17.65235a11.21674,11.21674,0,0,1,14.48926,4.90039h0a10.91337,10.91337,0,0,1,.584,8.74317,11.04423,11.04423,0,0,1-5.97559,6.39062l-2.55615,1.11035a10.85766,10.85766,0,0,1,4.03028,4.791q.18383.42335.33007.85254a7.30372,7.30372,0,0,1-2.05175,7.82617,7.57867,7.57867,0,0,1-8.28174,1.38965,11.37928,11.37928,0,0,0-4.564-.97363h-.05713A11.72468,11.72468,0,0,0,843.88,530.06775a11.86932,11.86932,0,0,0-.604,1.29394,7.58923,7.58923,0,0,1-6.98242,4.85938C836.22671,536.22205,836.1603,536.223,836.09389,536.223Z"
              transform="translate(-188.57911 -159.5948)"
              fill="#3f3d56"
            />
            <path
              d="M986.38462,455.473A15.66635,15.66635,0,0,0,966.3771,471.2498l-38.63825,78.18473-55.43664-12.4476a15.29692,15.29692,0,1,0-4.69971,17.33444c13.18814,7.59416,72.96171,40.35276,85.64728,17.89511,10.66286-18.87673,45.04774-81.41489,44.4368-102.14862A15.668,15.668,0,0,0,986.38462,455.473Z"
              transform="translate(-188.57911 -159.5948)"
              fill="#ffb6b6"
            />
            <circle cx="490.88086" cy="112.98022" r="5.59486" fill="#6c63ff" />
          </svg>
        </div>
      </section>

      <section className="mt-48 md:mt-40 pb-40 relative bg-blue-100">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blue-100 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-32">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-blue-800">
                <img
                  alt="..."
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
                  className="w-full align-middle rounded-t-lg"
                />
                <blockquote className="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 w-full block h-[95px] -top-[94px]"
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      className="text-blue-800 fill-current"
                    ></polygon>
                  </svg>
                  <h4 className="text-xl font-bold text-white">
                    Image 700px X 700px
                  </h4>
                  <p className="text-md font-light mt-2 text-white">
                    Putting together a page has never been easier than matching
                    together pre-made components. From landing pages
                    presentation to login areas, you can easily customise and
                    built your pages.
                  </p>
                </blockquote>
              </div>
            </div>

            <div className="w-full md:w-6/12 px-4">
              <div className="flex flex-wrap">
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blue-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-sitemap"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        CSS Components
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                        Notus NextJS comes with a huge number of Fully Coded CSS
                        components.
                      </p>
                    </div>
                  </div>
                  <div className="px-4 py-5 flex-auto">
                    <div className="relative flex flex-col min-w-0">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-drafting-compass"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        JavaScript Components
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                        We also feature many dynamic components for React,
                        NextJS, Vue and Angular.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col min-w-0 mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-newspaper"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">Pages</h6>
                      <p className="mb-4 text-blueGray-500">
                        This extension also comes with 3 sample pages. They are
                        fully coded so you can start working instantly.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-file-alt"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        Documentation
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                        Built by developers for developers. You will love how
                        easy is to to work with Notus NextJS.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto overflow-hidden pb-20">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
              <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <i className="fas fa-sitemap text-xl"></i>
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal">
                CSS Components
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                Every element that you need in a product comes built in as a
                component. All components fit perfectly with each other and can
                have different colours.
              </p>
            </div>

            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto mt-32">
              <div className="relative flex flex-col min-w-0 w-full mb-6 mt-48 md:mt-0">
                <img
                  alt="..."
                  src="/img/component-btn.png"
                  className="w-full align-middle rounded absolute shadow-lg max-w-100-px left-145-px -top-29-px z-3"
                />
                <img
                  alt="..."
                  src="/img/component-profile-card.png"
                  className="w-full align-middle rounded-lg absolute shadow-lg max-w-210-px left-260-px -top-160-px"
                />
                <img
                  alt="..."
                  src="/img/component-info-card.png"
                  className="w-full align-middle rounded-lg absolute shadow-lg max-w-180-px left-40-px -top-225-px z-2"
                />
                <img
                  alt="..."
                  src="/img/component-info-2.png"
                  className="w-full align-middle rounded-lg absolute shadow-2xl max-w-200-px -left-50-px top-25-px"
                />
                <img
                  alt="..."
                  src="/img/component-menu.png"
                  className="w-full align-middle rounded absolute shadow-lg max-w-580-px -left-20-px top-210-px"
                />
                <img
                  alt="..."
                  src="/img/component-btn-pink.png"
                  className="w-full align-middle rounded absolute shadow-xl max-w-120-px left-195-px top-95-px"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center pt-32">
            <div className="w-full md:w-6/12 px-4 mr-auto ml-auto mt-32">
              <div className="justify-center flex flex-wrap relative">
                <div className="my-4 w-full lg:w-6/12 px-4">
                  <a href="https://www.creative-tim.com/learning-lab/tailwind/svelte/alerts/notus?ref=vtw-index">
                    <div className="bg-red-600 shadow-lg rounded-lg text-center p-8">
                      <img
                        alt="..."
                        className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                        src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/svelte.jpg"
                      />
                      <p className="text-lg text-white mt-4 font-semibold">
                        Svelte
                      </p>
                    </div>
                  </a>
                  <a href="https://www.creative-tim.com/learning-lab/tailwind/react/alerts/notus?ref=vtw-index">
                    <div className="bg-blue-500 shadow-lg rounded-lg text-center p-8 mt-8">
                      <img
                        alt="..."
                        className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                        src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/react.jpg"
                      />
                      <p className="text-lg text-white mt-4 font-semibold">
                        ReactJS
                      </p>
                    </div>
                  </a>
                  <a href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/alerts/notus?ref=vtw-index">
                    <div className="bg-blue-900 shadow-lg rounded-lg text-center p-8 mt-8">
                      <img
                        alt="..."
                        className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                        src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/nextjs.jpg"
                      />
                      <p className="text-lg text-white mt-4 font-semibold">
                        NextJS
                      </p>
                    </div>
                  </a>
                </div>
                <div className="my-4 w-full lg:w-6/12 px-4 lg:mt-16">
                  <a href="https://www.creative-tim.com/learning-lab/tailwind/js/alerts/notus?ref=vtw-index">
                    <div className="bg-yellow-500 shadow-lg rounded-lg text-center p-8">
                      <img
                        alt="..."
                        className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                        src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/js.png"
                      />
                      <p className="text-lg text-white mt-4 font-semibold">
                        JavaScript
                      </p>
                    </div>
                  </a>
                  <a href="https://www.creative-tim.com/learning-lab/tailwind/angular/alerts/notus?ref=vtw-index">
                    <div className="bg-red-700 shadow-lg rounded-lg text-center p-8 mt-8">
                      <img
                        alt="..."
                        className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                        src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/angular.jpg"
                      />
                      <p className="text-lg text-white mt-4 font-semibold">
                        Angular
                      </p>
                    </div>
                  </a>
                  <a href="https://www.creative-tim.com/learning-lab/tailwind/vue/alerts/notus?ref=vtw-index">
                    <div className="bg-emerald-500 shadow-lg rounded-lg text-center p-8 mt-8">
                      <img
                        alt="..."
                        className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                        src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/vue.jpg"
                      />
                      <p className="text-lg text-white mt-4 font-semibold">
                        Vue.js
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
              <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <i className="fas fa-drafting-compass text-xl"></i>
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal">
                Javascript Components
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                In order to create a great User Experience some components
                require JavaScript. In this way you can manipulate the elements
                on the page and give more options to your users.
              </p>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                We created a set of Components that are dynamic and come to help
                you.
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 pb-32 pt-48">
          <div className="items-center flex flex-wrap">
            <div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
              <div className="md:pr-12">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <i className="fas fa-file-alt text-xl"></i>
                </div>
                <h3 className="text-3xl font-semibold">
                  Image 1500px X 1500px
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                  This extension comes a lot of fully coded examples that help
                  you get started faster. You can adjust the colors and also the
                  programming language. You can change the text and images and
                  you&apos;re good to go.
                </p>
                <ul className="list-none mt-6">
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                          <i className="fas fa-fingerprint"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                          Built by Developers for Developers
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                          <i className="fab fa-html5"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                          Carefully crafted code for Components
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                          <i className="far fa-paper-plane"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                          Dynamic Javascript Components
                        </h4>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
              <img
                alt="..."
                className="max-w-full rounded-lg shadow-xl"
                style={{
                  transform:
                    "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)",
                }}
                src="/img/documentation.png"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 bg-blueGray-200 relative pt-32">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blue-100 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>

        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center bg-white shadow-xl rounded-lg -mt-64 py-16 px-12 relative z-10">
            <div className="w-full text-center lg:w-8/12">
              <p className="text-4xl text-center">
                <span role="img" aria-label="love">
                  😍
                </span>
              </p>
              <h3 className="font-semibold text-3xl">
                Do you love this Starter Kit?
              </h3>
              <p className="text-blueGray-500 text-lg leading-relaxed mt-4 mb-4">
                Cause if you do, it can be yours now. Hit the buttons below to
                navigate to get the Free version for your next project. Build a
                new web app or give an old project a new look!
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
