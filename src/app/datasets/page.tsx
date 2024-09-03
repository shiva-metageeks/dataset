"use client";
import React, { useEffect, useState } from "react";
import { IoMdGrid } from "react-icons/io";
import { GoDotFill } from "react-icons/go";
import { CiHeart, CiGrid2H } from "react-icons/ci";
import { MdFileDownload } from "react-icons/md";
import { useRouter } from "next/navigation";
import type { Dataset } from './data';
import {datasets} from './data';

const tabs = [
  { name: "Main" },
  { name: "Tasks" },
  { name: "Libraries" },
  { name: "Languages" },
  { name: "Licenses" },
  { name: "Other" },
];

const modalities = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/1ebfdb23d946cbf561e759c7c358ea933e717affaf922de396b061200791c4c0?placeholderIfAbsent=true&apiKey=3ffd321d22914a748ca8bbca39c4d0b3",
    label: "3D",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/f4f629efb7ad3928eea31548367e17060248df092ea6b9c53a6347bd19a7470d?placeholderIfAbsent=true&apiKey=3ffd321d22914a748ca8bbca39c4d0b3",
    label: "Audio",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/8f2108713ed11ac1213ce3830b60c83f841f134430d524120c79fe24fef58800?placeholderIfAbsent=true&apiKey=3ffd321d22914a748ca8bbca39c4d0b3",
    label: "Geospatial",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/bfbf8ccb3509b9cec389806b4d32520d1447ea13f498fb6ac7cbe8af8882d4d0?placeholderIfAbsent=true&apiKey=3ffd321d22914a748ca8bbca39c4d0b3",
    label: "Image",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/be0f3ca2d6442d9ae8dfb9e408e57d9ebf5225b4f8aa8476e667738617a92e31?placeholderIfAbsent=true&apiKey=3ffd321d22914a748ca8bbca39c4d0b3",
    label: "Tabular",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/09114b6c5e00d64ed7afdd8f30754e7812e3af54a86931385435108b6e503b9b?placeholderIfAbsent=true&apiKey=3ffd321d22914a748ca8bbca39c4d0b3",
    label: "Text",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/725159fd3afb6cdfec94553689746ad447ca1762d9046b7bd7bade5306332428?placeholderIfAbsent=true&apiKey=3ffd321d22914a748ca8bbca39c4d0b3",
    label: "Time-series",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/55162f52a8d92092754fb56c9869cdef3d3a09d3bc2e357524d95cdfcd57af12?placeholderIfAbsent=true&apiKey=3ffd321d22914a748ca8bbca39c4d0b3",
    label: "Video",
  },
];

const formats = [
  {
    name: "json",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/5f64417aac716bd208f257c9e3e5d61e290f34b7a143e8f5951914d63f2ed4c0?placeholderIfAbsent=true&apiKey=3ffd321d22914a748ca8bbca39c4d0b3",
  },
  {
    name: "csv",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/23d37826e7aeda13aeeb18985661e7d16227a7bbf9ba6a26804513894ccd703d?placeholderIfAbsent=true&apiKey=3ffd321d22914a748ca8bbca39c4d0b3",
  },
  {
    name: "parquet",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/732f806d3385ac3d8a9b6f2e1799ec6f7ea683afda95f94b6a588ef80159a039?placeholderIfAbsent=true&apiKey=3ffd321d22914a748ca8bbca39c4d0b3",
  },
  {
    name: "imagefolder",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d0444812e415ca0d9f16000002f55fb5bdf3254a5814f2d77fbb7c960aebefdf?placeholderIfAbsent=true&apiKey=3ffd321d22914a748ca8bbca39c4d0b3",
  },
  {
    name: "soundfolder",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/a4305153a9eda2e2956fd27e508b192c85eb4e29ad7b0bedec05e3d5ecdecaae?placeholderIfAbsent=true&apiKey=3ffd321d22914a748ca8bbca39c4d0b3",
  },
  {
    name: "webdataset",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/2bba08042249a20fcc0a854f035e553411650d3462770e03554817dfe256f543?placeholderIfAbsent=true&apiKey=3ffd321d22914a748ca8bbca39c4d0b3",
  },
  {
    name: "text",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/80674db48b589e8d642816c453898049f55d326d037e087b0f6bdb5e1a60c1df?placeholderIfAbsent=true&apiKey=3ffd321d22914a748ca8bbca39c4d0b3",
  },
  {
    name: "arrow",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/7002591879c68ae61c903ffd71ab525427e7593933e0d26bd1256a40ddb30db9?placeholderIfAbsent=true&apiKey=3ffd321d22914a748ca8bbca39c4d0b3",
  },
];

const DatasetMainPage = () => {
  const [activeTab, setActiveTab] = useState<string>("Main");
  const [dataSet, setDataSet] = useState<Dataset[]>([]);
  const [minValue, setMinValue] = useState(20);
  const [maxValue, setMaxValue] = useState(80);

    useEffect(() => {
        setDataSet(datasets);
    },
    []);

   const handleMinChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value);
    if (value <= maxValue) {
      setMinValue(value);
    }
  };

  const handleMaxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value);
    if (value >= minValue) {
      setMaxValue(value);
    }
  };


  return (
    <div className="min-h-screen w-full flex justify-center items-center px-8 py-12">
      <div className="w-full flex flex-col rounded-2xl border border-solid bg-zinc-950 border-zinc-900 min-h-[901px]">
        <nav className="w-full px-4 py-4 flex flex-wrap border-b border-zinc-900 justify-center items-center shrink gap-10 self-start whitespace-nowrap basis-auto grow-0 text-zinc-500 max-md:max-w-full">
          {tabs.map((tab) => (
            <div
              key={tab.name}
              className={`text-[#7B7A7F] font-semibold cursor-pointer px-2 py-1 ${
                activeTab === tab.name
                  ? "text-white border-b-2 border-blue-800"
                  : "hover:text-white hover:border-b hover:border-blue-800"
              }`}
              onClick={() => setActiveTab(tab.name)}
            >
              {tab.name}
            </div>
          ))}
        </nav>
        <div className="px-4 py-2">
          {activeTab === "Main" && (
            <div>
              <div className="flex justify-between border-b-2 border-solid mb-4 border-zinc-900 gap-2">
                <div className="md:w-1/3 px-4 py-4">
                  <section className="flex border-r-2 border-solid bg-zinc-950 border-zinc-900 flex-col grow shrink-0 items-start mt-5 basis-0 w-fit">
                    <header className="flex gap-5 justify-between w-full max-w-[361px]">
                      <h2 className="my-auto text-lg font-medium text-white">
                        Modalities
                      </h2>
                      <button className="flex gap-1 px-3 py-1.5 text-sm leading-none rounded-md border border-solid bg-zinc-950 border-zinc-700 text-neutral-400">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/55724ebaa22ba79ac2bdeeb855b6a9cbb539621d755b04256d5a91788bc9e8e2?placeholderIfAbsent=true&apiKey=3ffd321d22914a748ca8bbca39c4d0b3"
                          alt=""
                          className="object-contain shrink-0 my-auto w-2.5 aspect-[0.83]"
                        />
                        <span>Reset Modalities</span>
                      </button>
                    </header>
                    <div className="flex flex-wrap gap-2.5 items-start self-stretch mt-6">
                      {modalities.map((modality, index) => (
                        <div className="flex gap-1.5 px-3 py-1.5 rounded-md border border-solid bg-zinc-800 border-zinc-700 text-sm leading-none text-neutral-400">
                          <img
                            loading="lazy"
                            src={modality.icon}
                            alt=""
                            className="object-contain shrink-0 my-auto w-3 aspect-square"
                          />
                          <div>{modality.label}</div>
                        </div>
                      ))}
                    </div>
                  </section>
                </div>
                <div className="md:w-1/3 px-4 py-4">
                  <section className="flex flex-col rounded-none border-r-2 px-4 border-solid bg-zinc-950 border-zinc-900 mt-5 ">
                    <header className="flex gap-5 justify-between items-start w-full">
                      <h2 className="text-lg font-medium text-white">
                        Size Rows
                      </h2>
                      <button className="flex gap-1 px-3 py-1.5 text-sm leading-none rounded-md border border-solid bg-zinc-950 border-zinc-700 text-neutral-400">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/55724ebaa22ba79ac2bdeeb855b6a9cbb539621d755b04256d5a91788bc9e8e2?placeholderIfAbsent=true&apiKey=3ffd321d22914a748ca8bbca39c4d0b3"
                          className="object-contain shrink-0 my-auto w-2.5 aspect-[0.83]"
                          alt=""
                        />
                        <span>Reset Size</span>
                      </button>
                      <div className="flex flex-col items-center justify-center mt-4">
      <div className="w-64">
        <div className="flex justify-between mb-2">
          <input
            type="number"
            min="0"
            max="100"
            value={minValue}
            onChange={handleMinChange}
            className="w-20 p-2 border border-gray-300 rounded-lg"
          />
          <input
            type="number"
            min="0"
            max="100"
            value={maxValue}
            onChange={handleMaxChange}
            className="w-20 p-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div className="relative">
          <input
            type="range"
            min="0"
            max={maxValue}
            value={minValue}
            onChange={handleMinChange}
            className="absolute w-full h-2 bg-transparent appearance-none pointer-events-auto"
            style={{ zIndex: minValue === maxValue ? 4 : 2 }}
          />
          <input
            type="range"
            min={minValue}
            max="100"
            value={maxValue}
            onChange={handleMaxChange}
            className="absolute w-full h-2 bg-transparent appearance-none pointer-events-auto"
            style={{ zIndex: 3 }}
          />
          <div
            className="absolute h-2 bg-gray-300 rounded-lg"
            style={{ width: '100%' }}
          />
          <div
            className="absolute h-2 bg-blue-500 rounded-lg"
            style={{
              left: `${minValue}%`,
              width: `${maxValue - minValue}%`,
            }}
          ></div>
        </div>
      </div>
    </div>
                    </header>
                    <div className="flex flex-wrap gap-2.5 mt-4"></div>
                  </section>
                </div>
                <div className="md:w-1/3 px-4 py-4">
                  <section className="flex flex-col rounded-none mt-5">
                    <header className="flex gap-5 justify-between w-full">
                      <h2 className="text-lg font-medium text-white">Format</h2>
                      <button className="flex gap-1 px-3 py-1.5 text-sm leading-none rounded-md border border-solid bg-zinc-950 border-zinc-700 text-neutral-400">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/55724ebaa22ba79ac2bdeeb855b6a9cbb539621d755b04256d5a91788bc9e8e2?placeholderIfAbsent=true&apiKey=3ffd321d22914a748ca8bbca39c4d0b3"
                          className="object-contain shrink-0 my-auto w-2.5 aspect-[0.83]"
                          alt=""
                        />
                        <span>Reset Size</span>
                      </button>
                    </header>
                    <div className="flex flex-wrap gap-2.5 mt-4">
                      {formats.map((format, index) => (
                        <button className="flex gap-1.5 px-3 py-1.5 text-sm leading-none whitespace-nowrap rounded-md border border-solid bg-zinc-800 border-zinc-700 text-neutral-400">
                          <img
                            loading="lazy"
                            src={format.icon}
                            className="object-contain shrink-0 my-auto w-3 aspect-[1.33]"
                            alt=""
                          />
                          <span>{format.name}</span>
                        </button>
                      ))}
                    </div>
                  </section>
                </div>
              </div>
              {/* filter */}
              <div className="flex justify-between items-center mb-4">
                <div className="flex justify-start items-center gap-2">
                  <div>DataSet found 232</div>
                  <div className="flex justify-center items-center gap-2 p-4">
                    <input
                      type="text"
                      placeholder="Search"
                      className="bg-gray-50 border px-4 py-2 border-gray-300 text-white text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block  dark:bg-zinc-950 dark:border-gray-700 "
                    />
                    <button className="text-white border-2 rounded-lg hover:bg-gray-700 text-sm border-gray-700 px-4 py-2 ">
                      Search
                    </button>
                  </div>
                </div>
                <div className="flex justify-center items-center gap-2 p-4">
                  <select
                    id="text"
                    className="bg-gray-50 border px-4 py-2 border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  dark:bg-zinc-950 dark:border-gray-700 "
                  >
                    <option selected value="fullText">
                      Full text
                    </option>
                    <option value="title">Title</option>
                    <option value="tags">Tags</option>
                  </select>
                  <select
                    id="sortBy"
                    className="w-full bg-gray-50 border px-4 py-2 border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  dark:bg-zinc-950 dark:border-gray-700 "
                  >
                    <option className="px-2 py-1" selected value="trending">
                      Sort By trending
                    </option>
                    <option className="px-2 py-1" value="recent">
                      Sort By recent
                    </option>
                    <option className="px-2 py-1" value="star">
                      Sort By star
                    </option>
                    <option className="px-2 py-1" value="fork">
                      Sort By fork
                    </option>
                  </select>
                </div>
              </div>

              <div className="mb-4 p-4">
                <div className="grid grid-cols-3 gap-4">
                  {datasets.map((item: Dataset, index) => (
                    <Card
                      key={index}
                      dataSet={item}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}
          {activeTab === "Tasks" && <div>Tasks</div>}
          {activeTab === "Libraries" && <div>Libraries</div>}
          {activeTab === "Languages" && <div>Languages</div>}
          {activeTab === "Licenses" && <div>Licenses</div>}
          {activeTab === "Other" && <div>Other</div>}
        </div>
      </div>
    </div>
  );
};

export default DatasetMainPage;


interface DatasetProps{
    dataSet: Dataset;
}
export const Card: React.FC<DatasetProps> = ({
  dataSet
}) => {
    const router = useRouter();
  return (
    <article onClick={()=>{router.push(`main/${dataSet.name}`)}} className="flex flex-col text-sm leading-none rounded-none max-w-[487px]">
      <div className="flex flex-wrap gap-5 py-3.5 pr-14 pl-5 w-full bg-black rounded-md border border-solid border-zinc-700 max-md:px-5 max-md:max-w-full hover:bg-slate-800 cursor-pointer ">
        <div className="flex flex-auto gap-1">
          <div className="flex flex-col grow gap-2 shrink-0 basis-0 w-fit">
            <h2 className="self-start text-white">{dataSet.name}</h2>
            <div className="flex flex-row justify-start items-center gap-2 text-neutral-500">
              <div className="flex gap-1">
                <span>
                  <IoMdGrid />
                </span>
                <span>Viewer</span>
              </div>
              <GoDotFill />
              <div className="flex gap-1">
                <span>Updated {dataSet.updatedDate}</span>
              </div>
              <GoDotFill />
              <div className="flex gap-1">
                <span>
                  <MdFileDownload />
                </span>
                <span>{dataSet.downloads}</span>
              </div>
              <GoDotFill />
              <div className="flex gap-1">
                <span>
                  <CiHeart />
                </span>
                <span>{dataSet.stars}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
