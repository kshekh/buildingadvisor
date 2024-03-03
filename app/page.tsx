import Image from "next/image";
// import Icon from '@/app/components/Icon'
export default function Home() {
  return (
    <div className="flex flex-col justify-center bg-white">
      <div className="flex flex-col px-5 pb-12 w-full border-r border-solid bg-black bg-opacity-10 border-r-black border-r-opacity-10  max-w-full">
        <div className="py-5 pr-20 pl-5 mt-6 mr-3.5 ml-3 bg-pink-800 rounded-md max-md:pr-5 max-md:mr-2.5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
            <div className="flex flex-col max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a38ac4e9778123ba5b9c96e29d61f4c77c6039dbb79ea0548cba8a533da78fe8?apiKey=e288177870584f19969717bd4cd663f8&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a38ac4e9778123ba5b9c96e29d61f4c77c6039dbb79ea0548cba8a533da78fe8?apiKey=e288177870584f19969717bd4cd663f8&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a38ac4e9778123ba5b9c96e29d61f4c77c6039dbb79ea0548cba8a533da78fe8?apiKey=e288177870584f19969717bd4cd663f8&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a38ac4e9778123ba5b9c96e29d61f4c77c6039dbb79ea0548cba8a533da78fe8?apiKey=e288177870584f19969717bd4cd663f8&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a38ac4e9778123ba5b9c96e29d61f4c77c6039dbb79ea0548cba8a533da78fe8?apiKey=e288177870584f19969717bd4cd663f8&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a38ac4e9778123ba5b9c96e29d61f4c77c6039dbb79ea0548cba8a533da78fe8?apiKey=e288177870584f19969717bd4cd663f8&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a38ac4e9778123ba5b9c96e29d61f4c77c6039dbb79ea0548cba8a533da78fe8?apiKey=e288177870584f19969717bd4cd663f8&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a38ac4e9778123ba5b9c96e29d61f4c77c6039dbb79ea0548cba8a533da78fe8?apiKey=e288177870584f19969717bd4cd663f8&"
              />
            </div>
            <div className="flex flex-col ml-5 w-[69%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col mt-12 font-semibold max-md:mt-10 max-md:max-w-full">
                <div className="text-4xl tracking-wide text-white max-md:max-w-full">
                  Let’s find your perfect building
                </div>
                <div className="mt-4 text-2xl tracking-wide leading-9 text-white max-md:max-w-full">
                  Hi, I’m Jill. Welcome to my Condo Portfolio. I’m a condo building advisor and
                  would love to help you find your next home or investment property.
                </div>
                <div className="flex gap-3.5 items-center px-6 py-3 mt-12 bg-white rounded-[10950.528px] max-md:flex-wrap max-md:px-5 max-md:mt-10 max-md:max-w-full">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/d7f34d0f58527d5cb5cd7b173631d105c4017658ccb8e42c3a4759c7048eb40a?apiKey=e288177870584f19969717bd4cd663f8&"
                    className="self-stretch my-auto aspect-[1.04] w-[25px]"
                  />
                  <div className="justify-center self-stretch px-2.5 py-2 text-lg leading-6 text-white whitespace-nowrap bg-pink-800 rounded-md">
                    Miami, FL (Metro Area)
                  </div>
                  <div className="flex-auto self-stretch my-auto text-lg text-black text-opacity-50 max-md:max-w-full">
                    Search for buildings by name, city or zip
                  </div>
                </div>
                <div className="mt-7 text-sm leading-6 text-pink-300 uppercase max-md:max-w-full">
                  Popular Neighborhoods
                </div>
                <div className="flex gap-3 justify-between pr-7 mt-7 text-xl font-medium text-white whitespace-nowrap max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
                  <div className="grow justify-center items-start py-5 pr-16 pl-7 bg-rose-900 rounded-md max-md:px-5">
                    Brickell
                  </div>
                  <div className="grow justify-center px-6 py-5 bg-rose-900 rounded-md max-md:px-5">
                    Miami Beach
                  </div>
                  <div className="grow justify-center px-6 py-5 bg-rose-900 rounded-md max-md:px-5">
                    Coconut Grove
                  </div>
                  <div className="grow justify-center items-start py-5 pr-16 pl-7 bg-rose-900 rounded-md max-md:px-5">
                    Aventura
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-11 pt-8 mt-4 mr-3.5 ml-3 bg-pink-800 rounded-md max-md:px-5 max-md:mr-2.5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
            <div className="flex flex-col w-[45%] max-md:ml-0 max-md:w-full">
              <div className="self-stretch my-auto text-3xl tracking-wide leading-9 text-white max-md:mt-10 max-md:max-w-full">
                Follow me to get up to the minute building real estate alerts, pocket listings
                and updates
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[55%] max-md:ml-0 max-md:w-full">
              <div className="flex grow gap-5 justify-between items-center font-bold text-center text-pink-800 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
                <div className="flex flex-col flex-1 items-center self-stretch px-5 pt-5 rounded">
                  <div className="text-sm uppercase">NEW LISTING</div>
                  <div className="mt-2.5 text-xl font-semibold text-zinc-800">
                    Brickell Tower
                  </div>
                  <div className="mt-2.5 text-sm uppercase whitespace-nowrap">
                    2bd 2ba $380,000
                  </div>
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a4d3e41214a442beb7fb4bc3c551b2f7bb27a273f1c2e9c955494b15b4faa949?apiKey=e288177870584f19969717bd4cd663f8&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a4d3e41214a442beb7fb4bc3c551b2f7bb27a273f1c2e9c955494b15b4faa949?apiKey=e288177870584f19969717bd4cd663f8&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a4d3e41214a442beb7fb4bc3c551b2f7bb27a273f1c2e9c955494b15b4faa949?apiKey=e288177870584f19969717bd4cd663f8&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a4d3e41214a442beb7fb4bc3c551b2f7bb27a273f1c2e9c955494b15b4faa949?apiKey=e288177870584f19969717bd4cd663f8&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a4d3e41214a442beb7fb4bc3c551b2f7bb27a273f1c2e9c955494b15b4faa949?apiKey=e288177870584f19969717bd4cd663f8&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a4d3e41214a442beb7fb4bc3c551b2f7bb27a273f1c2e9c955494b15b4faa949?apiKey=e288177870584f19969717bd4cd663f8&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a4d3e41214a442beb7fb4bc3c551b2f7bb27a273f1c2e9c955494b15b4faa949?apiKey=e288177870584f19969717bd4cd663f8&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a4d3e41214a442beb7fb4bc3c551b2f7bb27a273f1c2e9c955494b15b4faa949?apiKey=e288177870584f19969717bd4cd663f8&"
                    className="mt-3.5 aspect-[6.67] w-[258px]"
                  />
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/5ceaea6c5426c92d05510557db4456ee82364e84f8321f27f11d8904265e0951?apiKey=e288177870584f19969717bd4cd663f8&"
                  className="self-stretch my-auto w-11 aspect-square"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/e4951d156596b100398e41514e076677d0e5cdbb1d9aa46e86b9dfeeb043199e?apiKey=e288177870584f19969717bd4cd663f8&"
                  className="self-stretch my-auto aspect-[1.02] w-[50px]"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/617d3ef86e3819f037f9f8011bd7f5a0232f95418a570876b5a907d3089a686e?apiKey=e288177870584f19969717bd4cd663f8&"
                  className="self-stretch my-auto aspect-square w-[49px]"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/82e075c1930a1b58156cb89b4318c593f9dfa9da3db8747f48f523460b7c9dbb?apiKey=e288177870584f19969717bd4cd663f8&"
                  className="self-stretch my-auto aspect-[1.08] w-[42px]"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/0b83055f5fbe82c83611629af5f548aeb66a2e1d78dd046afbaf918b13d78999?apiKey=e288177870584f19969717bd4cd663f8&"
                  className="self-stretch my-auto aspect-square w-[50px]"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-5 justify-between mt-7 mr-3.5 ml-3 uppercase leading-[100%] max-md:flex-wrap max-md:mr-2.5 max-md:max-w-full">
          <div className="flex-auto self-start mt-5 text-xl font-semibold text-black text-opacity-80">
            MY favorite buildings
          </div>
          <div className="justify-center px-5 py-3.5 text-base font-bold text-center whitespace-nowrap bg-white border-white border-solid border-[1.46px] rounded-[14596.117px] text-black text-opacity-60">
            VIEW ALL
          </div>
        </div>
        <div className="mt-8 mr-3.5 ml-3 max-md:mr-2.5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
            <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow pb-4 mx-auto w-full bg-white rounded shadow-md max-md:mt-5">
                <div className="shrink-0 bg-pink-800 h-[11px]" />
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/804bbcce1a1a3a00b071e9d3e999ffe76eea42fbf3c2d10533835758db73db79?apiKey=e288177870584f19969717bd4cd663f8&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/804bbcce1a1a3a00b071e9d3e999ffe76eea42fbf3c2d10533835758db73db79?apiKey=e288177870584f19969717bd4cd663f8&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/804bbcce1a1a3a00b071e9d3e999ffe76eea42fbf3c2d10533835758db73db79?apiKey=e288177870584f19969717bd4cd663f8&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/804bbcce1a1a3a00b071e9d3e999ffe76eea42fbf3c2d10533835758db73db79?apiKey=e288177870584f19969717bd4cd663f8&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/804bbcce1a1a3a00b071e9d3e999ffe76eea42fbf3c2d10533835758db73db79?apiKey=e288177870584f19969717bd4cd663f8&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/804bbcce1a1a3a00b071e9d3e999ffe76eea42fbf3c2d10533835758db73db79?apiKey=e288177870584f19969717bd4cd663f8&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/804bbcce1a1a3a00b071e9d3e999ffe76eea42fbf3c2d10533835758db73db79?apiKey=e288177870584f19969717bd4cd663f8&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/804bbcce1a1a3a00b071e9d3e999ffe76eea42fbf3c2d10533835758db73db79?apiKey=e288177870584f19969717bd4cd663f8&"
                  className="w-full aspect-[1.3]"
                />
                <div className="flex gap-5 self-center mt-8">
                  <div className="flex flex-col flex-1 my-auto font-semibold">
                    <div className="text-3xl tracking-wide leading-10 text-pink-800 capitalize whitespace-nowrap">
                      Beach House 8
                    </div>
                    <div className="mt-7 text-xl leading-6 text-black text-opacity-60">
                      3651 Collins Avenue
                      <br />
                      Miami Beach, FL 33140
                    </div>
                    <div className="flex gap-5 justify-between pr-7 mt-5 whitespace-nowrap max-md:pr-5">
                      <div className="flex flex-col self-start basis-0">
                        <div className="text-sm leading-4 uppercase text-black text-opacity-50">
                          Units
                        </div>
                        <div className="mt-3 text-xl leading-5 text-black text-opacity-60">
                          8
                        </div>
                      </div>
                      <div className="flex flex-col flex-1">
                        <div className="text-sm leading-4 uppercase text-black text-opacity-50">
                          STARTING FROM
                        </div>
                        <div className="mt-2.5 text-xl leading-5 text-black text-opacity-60">
                          $8.4M
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col flex-1 text-sm font-bold leading-loose text-center text-white uppercase whitespace-nowrap">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/44232eda4acc910da414361cf1423208b9f1b6ced182bf728f5539b41270147d?apiKey=e288177870584f19969717bd4cd663f8&"
                      className="self-end aspect-square w-[26px]"
                    />
                    <div className="justify-center px-7 py-2.5 mt-24 bg-pink-800 rounded border border-pink-800 border-solid max-md:px-5 max-md:mt-10">
                      VIEW
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow pb-4 w-full font-semibold bg-white rounded shadow-md max-md:mt-5">
                <div className="shrink-0 bg-pink-800 h-[11px]" />
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/8ef11c495945595441229deff6c0ae3fb735c4c0e71c041c58c88b50bd1d97c7?apiKey=e288177870584f19969717bd4cd663f8&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/8ef11c495945595441229deff6c0ae3fb735c4c0e71c041c58c88b50bd1d97c7?apiKey=e288177870584f19969717bd4cd663f8&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8ef11c495945595441229deff6c0ae3fb735c4c0e71c041c58c88b50bd1d97c7?apiKey=e288177870584f19969717bd4cd663f8&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/8ef11c495945595441229deff6c0ae3fb735c4c0e71c041c58c88b50bd1d97c7?apiKey=e288177870584f19969717bd4cd663f8&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/8ef11c495945595441229deff6c0ae3fb735c4c0e71c041c58c88b50bd1d97c7?apiKey=e288177870584f19969717bd4cd663f8&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8ef11c495945595441229deff6c0ae3fb735c4c0e71c041c58c88b50bd1d97c7?apiKey=e288177870584f19969717bd4cd663f8&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/8ef11c495945595441229deff6c0ae3fb735c4c0e71c041c58c88b50bd1d97c7?apiKey=e288177870584f19969717bd4cd663f8&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/8ef11c495945595441229deff6c0ae3fb735c4c0e71c041c58c88b50bd1d97c7?apiKey=e288177870584f19969717bd4cd663f8&"
                  className="w-full aspect-[1.3]"
                />
                <div className="flex flex-col px-5 mt-8 max-md:px-5">
                  <div className="flex gap-2 justify-between text-3xl tracking-wide leading-10 text-pink-800 capitalize whitespace-nowrap">
                    <div className="grow my-auto">Aston Martin Resid...</div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/44232eda4acc910da414361cf1423208b9f1b6ced182bf728f5539b41270147d?apiKey=e288177870584f19969717bd4cd663f8&"
                      className="aspect-square w-[26px]"
                    />
                  </div>
                  <div className="mt-7 text-xl leading-6 text-black text-opacity-60">
                    300 Biscayne Boulevard Way
                    <br />
                    Miami, FL 33131
                  </div>
                  <div className="flex gap-5 justify-between items-start mt-5 whitespace-nowrap">
                    <div className="flex flex-col basis-0">
                      <div className="text-sm leading-4 uppercase text-black text-opacity-50">
                        Units
                      </div>
                      <div className="mt-3 text-xl leading-5 text-black text-opacity-60">
                        391
                      </div>
                    </div>
                    <div className="flex flex-col flex-1">
                      <div className="text-sm leading-4 uppercase text-black text-opacity-50">
                        STARTING FROM
                      </div>
                      <div className="mt-2.5 text-xl leading-5 text-black text-opacity-60">
                        $15.5M
                      </div>
                    </div>
                    <div className="grow justify-center px-7 py-2.5 mt-2.5 text-sm font-bold leading-loose text-center text-white uppercase bg-pink-800 rounded border border-pink-800 border-solid max-md:px-5">
                      VIEW
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow pb-4 mx-auto w-full bg-white rounded shadow-md max-md:mt-5">
                <div className="shrink-0 bg-pink-800 h-[11px]" />
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c3636baa3092c3061d983215fdfea9144aeecef23269dd4b21fe10be310c6936?apiKey=e288177870584f19969717bd4cd663f8&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c3636baa3092c3061d983215fdfea9144aeecef23269dd4b21fe10be310c6936?apiKey=e288177870584f19969717bd4cd663f8&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c3636baa3092c3061d983215fdfea9144aeecef23269dd4b21fe10be310c6936?apiKey=e288177870584f19969717bd4cd663f8&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c3636baa3092c3061d983215fdfea9144aeecef23269dd4b21fe10be310c6936?apiKey=e288177870584f19969717bd4cd663f8&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c3636baa3092c3061d983215fdfea9144aeecef23269dd4b21fe10be310c6936?apiKey=e288177870584f19969717bd4cd663f8&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c3636baa3092c3061d983215fdfea9144aeecef23269dd4b21fe10be310c6936?apiKey=e288177870584f19969717bd4cd663f8&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c3636baa3092c3061d983215fdfea9144aeecef23269dd4b21fe10be310c6936?apiKey=e288177870584f19969717bd4cd663f8&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c3636baa3092c3061d983215fdfea9144aeecef23269dd4b21fe10be310c6936?apiKey=e288177870584f19969717bd4cd663f8&"
                  className="w-full aspect-[1.3]"
                />
                <div className="flex gap-5 justify-between self-center mt-8">
                  <div className="flex flex-col flex-1 my-auto font-semibold">
                    <div className="text-3xl tracking-wide leading-10 text-pink-800 capitalize whitespace-nowrap">
                      Ocean House
                    </div>
                    <div className="mt-7 text-xl leading-6 text-black text-opacity-60">
                      125 Ocean Drvie
                      <br />
                      Miami Beach, FL 33139
                    </div>
                    <div className="flex gap-5 justify-between pr-6 mt-5 whitespace-nowrap max-md:pr-5">
                      <div className="flex flex-col self-start basis-0">
                        <div className="text-sm leading-4 uppercase text-black text-opacity-50">
                          Units
                        </div>
                        <div className="mt-3 text-xl leading-5 text-black text-opacity-60">
                          28
                        </div>
                      </div>
                      <div className="flex flex-col flex-1">
                        <div className="text-sm leading-4 uppercase text-black text-opacity-50">
                          STARTING FROM
                        </div>
                        <div className="mt-2.5 text-xl leading-5 text-black text-opacity-60">
                          $1.9M
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col flex-1 text-sm font-bold leading-loose text-center text-white uppercase whitespace-nowrap">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/44232eda4acc910da414361cf1423208b9f1b6ced182bf728f5539b41270147d?apiKey=e288177870584f19969717bd4cd663f8&"
                      className="self-end aspect-square w-[26px]"
                    />
                    <div className="justify-center px-7 py-2.5 mt-24 bg-pink-800 rounded border border-pink-800 border-solid max-md:px-5 max-md:mt-10">
                      VIEW
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow pb-4 w-full font-semibold bg-white rounded shadow-md max-md:mt-5">
                <div className="shrink-0 bg-pink-800 h-[11px]" />
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/fc399a74ea0f4aeb735965f13bd7506209604294516b4cdc97f46978b337ccd9?apiKey=e288177870584f19969717bd4cd663f8&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/fc399a74ea0f4aeb735965f13bd7506209604294516b4cdc97f46978b337ccd9?apiKey=e288177870584f19969717bd4cd663f8&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fc399a74ea0f4aeb735965f13bd7506209604294516b4cdc97f46978b337ccd9?apiKey=e288177870584f19969717bd4cd663f8&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/fc399a74ea0f4aeb735965f13bd7506209604294516b4cdc97f46978b337ccd9?apiKey=e288177870584f19969717bd4cd663f8&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/fc399a74ea0f4aeb735965f13bd7506209604294516b4cdc97f46978b337ccd9?apiKey=e288177870584f19969717bd4cd663f8&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fc399a74ea0f4aeb735965f13bd7506209604294516b4cdc97f46978b337ccd9?apiKey=e288177870584f19969717bd4cd663f8&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/fc399a74ea0f4aeb735965f13bd7506209604294516b4cdc97f46978b337ccd9?apiKey=e288177870584f19969717bd4cd663f8&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/fc399a74ea0f4aeb735965f13bd7506209604294516b4cdc97f46978b337ccd9?apiKey=e288177870584f19969717bd4cd663f8&"
                  className="w-full aspect-[1.3]"
                />
                <div className="flex flex-col px-6 mt-8 max-md:px-5">
                  <div className="text-3xl tracking-wide leading-10 text-pink-800 capitalize whitespace-nowrap">
                    Oceanside Fisher Isl...
                  </div>
                  <div className="mt-7 text-xl leading-6 text-black text-opacity-60">
                    7400-8061 Fisher Island Drive
                    <br />
                    Miami Beach, FL 33109
                  </div>
                  <div className="flex gap-5 justify-between items-start mt-5 whitespace-nowrap">
                    <div className="flex flex-col basis-0">
                      <div className="text-sm leading-4 uppercase text-black text-opacity-50">
                        Units
                      </div>
                      <div className="mt-3 text-xl leading-5 text-black text-opacity-60">
                        134
                      </div>
                    </div>
                    <div className="flex flex-col flex-1">
                      <div className="text-sm leading-4 uppercase text-black text-opacity-50">
                        STARTING FROM
                      </div>
                      <div className="mt-2.5 text-xl leading-5 text-black text-opacity-60">
                        $6.1M
                      </div>
                    </div>
                    <div className="grow justify-center px-7 py-2.5 mt-2.5 text-sm font-bold leading-loose text-center text-white uppercase bg-pink-800 rounded border border-pink-800 border-solid max-md:px-5">
                      VIEW
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-center mt-9 text-xl font-semibold leading-5 text-pink-800 uppercase whitespace-nowrap">
          Benefits of <span className="text-pink-800">working with me</span>
        </div>
        <div className="flex flex-col px-8 mt-10 w-full max-md:px-5 max-md:max-w-full">
          <div className="max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
              <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow justify-end px-10 py-9 w-full bg-white rounded-lg shadow-md max-md:px-5 max-md:mt-5">
                  <div className="text-2xl font-semibold tracking-tight leading-7 text-pink-800 uppercase">
                    every condo Building in the market
                  </div>
                  <div className="mt-9 text-2xl leading-7 text-black text-opacity-80">
                    Access 150,000+ buildings in the U.S.
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow justify-end px-12 py-10 w-full bg-white rounded-lg shadow-md max-md:px-5 max-md:mt-5">
                  <div className="text-2xl font-semibold tracking-tight leading-7 text-pink-800 uppercase max-md:mr-1.5">
                    building level Real Estate alerts
                  </div>
                  <div className="mt-10 text-2xl leading-7 text-black text-opacity-80 max-md:mr-1.5">
                    Find out when new units are for sale or rent
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow justify-end px-11 py-9 w-full bg-white rounded-lg shadow-md max-md:px-5 max-md:mt-5">
                  <div className="text-2xl font-semibold leading-7 text-pink-800 uppercase">
                    condo SpecificResources
                  </div>
                  <div className="mt-10 text-2xl leading-7 text-black text-opacity-80">
                    Resources about new condo laws, HOA’s, financing & more
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                <div className="flex grow gap-0 justify-between px-10 py-9 w-full bg-white rounded-lg shadow-md max-md:px-5 max-md:mt-5">
                  <div className="flex flex-col flex-1 text-black text-opacity-80">
                    <div className="text-2xl font-semibold leading-7 text-pink-800 uppercase">
                      Always a call or Txt Away
                    </div>
                    <div className="mt-11 text-lg font-bold leading-7 uppercase whitespace-nowrap max-md:mt-10">
                      Call or Text
                    </div>
                    <div className="mt-4 text-2xl leading-7 whitespace-nowrap">
                      (954) 555-4545
                    </div>
                  </div>
                  <div className="grow justify-center self-end px-6 py-3.5 mt-24 text-sm font-bold leading-3 text-center uppercase whitespace-nowrap bg-white rounded border-2 border-solid border-black border-opacity-20 text-black text-opacity-50 max-md:px-5 max-md:mt-10">
                    Contact
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 text-xl font-semibold leading-5 uppercase text-black text-opacity-80 max-md:mt-10 max-md:max-w-full">
            Nearby cities
          </div>
          <div className="flex gap-5 justify-between mt-10 text-2xl font-bold leading-8 text-center text-pink-800 uppercase whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
            <div className="grow justify-center items-center px-16 py-8 bg-white rounded-lg shadow-md max-md:px-5">
              Miami
            </div>
            <div className="grow justify-center items-center px-16 py-8 bg-white rounded-lg shadow-md max-md:px-5">
              Miami Beach
            </div>
            <div className="grow justify-center items-center px-16 py-8 bg-white rounded-lg shadow-md max-md:px-5">
              Aventura
            </div>
            <div className="grow justify-center px-16 py-8 bg-white rounded-lg shadow-md max-md:pr-6 max-md:pl-6">
              Sunny Isles Beach
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
