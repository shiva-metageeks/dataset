"use client";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { datasets } from "../../data";
import { CiText, CiGrid41, CiSearch, CiMenuKebab } from "react-icons/ci";
import { FaRegEdit } from "react-icons/fa";
import { IoCodeSlash } from "react-icons/io5";
import { IoMdGrid } from "react-icons/io";
import { GoDotFill } from "react-icons/go";
import { CiHeart, CiGrid2H } from "react-icons/ci";
import { IoIosGitNetwork } from "react-icons/io";
import { CiFileOn } from "react-icons/ci";
import { MdFileDownload } from "react-icons/md";
import { useRouter } from "next/navigation";
import Link from "next/link";
import type { Dataset, Message, DataCard } from "../../data";

const metadataItems = [
  { label: "Modalities:", items: ["Text"] },
  { label: "Formats:", items: ["csv"] },
  { label: "Size:", items: ["< 1K"] },
  { label: "Tags:", items: ["ChatGPT"] },
  { label: "Libraries:", items: ["Datasets", "pandas", "Croissant"] },
  { label: "+ 1 License:", items: ["cc0-1.0"] },
];

const tabs = [
  { name: "Dataset Cards" },
  { name: "Viewers" },
  { name: "Files and Versions" },
  { name: "Community" },
];

const DataCardPage = () => {
  const [activeTab, setActiveTab] = useState("Dataset Cards");
  const [data, setData] = useState<Dataset>({} as Dataset);
  const { slug } = useParams<{ slug: string }>();
  const dataName = slug.replace(/%20/g, " ");
  const router = useRouter();

  console.log(dataName);
  console.log(datasets);

  const getData = async () => {
    setData(datasets[0]);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="min-h-screen w-full flex justify-center items-center px-8 py-12">
      <div className="w-full flex flex-col rounded-2xl border border-solid bg-zinc-950 border-zinc-900 min-h-[901px]">
        <div className="flex flex-col rounded-none border-b px-12 pt-12 border-zinc-900">
          <div className="flex flex-col w-full">
            <div className="flex gap-2.5 self-start text-lg font-medium text-white">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d4e4a2341a8a54ece1a3ffce77387b0b17faa879995758e2af6e66bb1281fd0f?placeholderIfAbsent=true&apiKey=3ffd321d22914a748ca8bbca39c4d0b3"
                className="object-contain shrink-0 rounded-none aspect-square w-[30px]"
                alt=""
              />
              <div className="flex-auto my-auto">
                Datasets:{" "}
                <span className="text-stone-300">
                  fka/awesome-chatgpt-prompts
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-2.5 mt-5 w-full text-sm text-neutral-400 max-md:max-w-full">
            <div className="flex ">
              <div className="px-4 py-2 text-md">Modality:</div>

              <div className="bg-[#28272D] border-zinc-950 border-1 rounded-md px-4 py-1 gap-2 flex justify-center items-center">
                <CiText />
                <div className="text-white">Text</div>
              </div>
            </div>
            <div className="flex ">
              <div className="px-4 py-2 text-md">Format:</div>

              <div className="bg-[#28272D] border-zinc-950 border-1 rounded-md px-4 py-1 gap-2 flex justify-center items-center">
                <CiGrid41 />
                <div className="text-white">Text</div>
              </div>
            </div>
            <div className="flex ">
              <div className="px-4 py-2 text-md">Size:</div>

              <div className="bg-[#28272D] border-zinc-950 border-1 rounded-md px-4 py-1 gap-2 flex justify-center items-center">
                <div className="text-white">Text</div>
              </div>
            </div>
            <div className="flex ">
              <div className="px-4 py-2 text-md">Tags</div>

              <div className="bg-[#28272D] border-zinc-950 border-1 rounded-md px-4 py-1 gap-2 flex justify-center items-center">
                <div className="text-white">Text</div>
              </div>
            </div>
            <div className="flex ">
              <div className="px-4 py-2 text-md">Libraries</div>

              <div className="bg-[#28272D] border-zinc-950 border-1 rounded-md px-4 py-1 gap-2 flex justify-center items-center">
                <div className="text-white">Text</div>
              </div>
            </div>
            <div className="flex ">
              <div className="px-4 py-2 text-md">+1 License</div>

              <div className="bg-[#28272D] border-zinc-950 border-1 rounded-md px-4 py-1 gap-2 flex justify-center items-center">
                <div className="text-white">Text</div>
              </div>
            </div>
          </div>
          <nav className="w-full px-4 py-4 flex flex-wrap justify-start items-center shrink gap-10 self-start whitespace-nowrap basis-auto grow-0 text-zinc-500 max-md:max-w-full">
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
        </div>

        <div className="w-flex border-zinc-950 border-1 p-6 ">
          {activeTab === "Dataset Cards" && (
            <div className="flex justify-between gap-4">
              <div className="md:w-2/3">
                <div className="flex flex-col rounded-none">
                  <header className="flex flex-col pt-5 pb-px w-full rounded-xl border border-solid bg-zinc-950 border-zinc-800  max-md:max-w-full">
                    <div className="flex flex-wrap gap-5 border-b border-solid bg-zinc-950 border-zinc-800 p-2 justify-between items-center w-full">
                      <h1 className="flex  gap-2.5 my-auto text-sm font-medium text-white">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/2a240a60ee4d33191e1a1af1bf28479b3f6e045312e28d8ee892890337e51528?placeholderIfAbsent=true&apiKey=3ffd321d22914a748ca8bbca39c4d0b3"
                          className="object-contain shrink-0 my-auto w-3.5 aspect-[1.17]"
                          alt=""
                        />
                        <span>Dataset card</span>
                      </h1>
                      <div className="flex gap-1.5 text-xs text-neutral-400 max-md:max-w-full">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/bedefd7418d0df9e6678e3c1004217afbdd85caadd6fc8229012545d8033d256?placeholderIfAbsent=true&apiKey=3ffd321d22914a748ca8bbca39c4d0b3"
                          className="object-contain shrink-0 my-auto w-2.5 aspect-[0.83]"
                          alt=""
                        />
                        <p className="basis-auto text-zinc-500">
                          <span className="underline">Auto-converted</span> to
                          Parquet
                        </p>
                        <button className="px-3 py-1 rounded-md border border-solid bg-zinc-950 border-zinc-700">
                          &lt;/&gt; API
                        </button>
                        <button className="px-6 py-1 whitespace-nowrap rounded-md border border-solid bg-zinc-950 border-zinc-700 max-md:pl-5">
                          Embed
                        </button>
                        <button className="flex gap-1 px-2.5 py-1 rounded-md border border-solid bg-zinc-950 border-zinc-700">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/45a8736c50e61c2965c24494c13f6365168f039b0f12a58be46823801f8b0415?placeholderIfAbsent=true&apiKey=3ffd321d22914a748ca8bbca39c4d0b3"
                            className="object-contain shrink-0 my-auto aspect-[1.12] w-[9px]"
                            alt=""
                          />
                          <span className="basis-auto">
                            View in Dataset Viewer
                          </span>
                        </button>
                      </div>
                    </div>

                    <div className="p-2 flex justify-start border-b border-solid border-zinc-700 ">
                      <div className="md:w-1/2 border-r border-solid border-zinc-700 p-2">
                        Split(1) train . 6krows
                      </div>
                      <div className="md:w-1/2 p-2"></div>
                    </div>
                    <div className="w-full flex justify-start items-center p-2 gap-4">
                      <CiSearch />
                      <input
                        type="text"
                        className="w-full bg-zinc-950 text-white"
                        placeholder="Search Dataset"
                      />
                    </div>
                  </header>
                  <section className="flex flex-col items-start px-5 mt-4 w-full max-md:max-w-full">
                    <div className="flex flex-wrap gap-5 justify-between self-stretch max-md:max-w-full">
                      <div className="flex flex-col text-sm">
                        <h2 className="self-start font-medium text-white">
                          Messages
                        </h2>
                        <p className="mt-1 leading-none text-zinc-500">
                          list lengths
                        </p>
                      </div>
                      <div className="flex flex-col self-start">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/19f69492b60420dc696ba5bf65e3d81a60d6ab2906141f0e64f1ca99d1dd2818?placeholderIfAbsent=true&apiKey=3ffd321d22914a748ca8bbca39c4d0b3"
                          className="object-contain w-3.5 aspect-[1.75]"
                          alt=""
                        />
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/4eb518bac7c86d09eb8358b7818d1b1915a653c4a4bbb4df2fe9c7477b07514e?placeholderIfAbsent=true&apiKey=3ffd321d22914a748ca8bbca39c4d0b3"
                          className="object-contain mt-1 w-3.5 aspect-[1.75]"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="flex shrink-0 bg-stone-500 h-[30px] w-[129px]" />
                    <div className="flex gap-5 justify-between max-w-full text-sm font-semibold leading-none whitespace-nowrap text-zinc-500 w-[129px]">
                      <div>2</div>
                      <div>2</div>
                    </div>
                    {data?.dataCard?.messages?.length > 0 &&
                      data?.dataCard?.messages?.map(
                        (message: Message, index: number) => (
                          <div
                            key={index}
                            className="w-full text-white overflow-y-scroll "
                          >
                            <div className=" px-6 py-2.5 mt-2 w-full text-sm leading-5 bg-black border border-solid border-zinc-800 text-neutral-400">
                              [ &123; &quot;role&quot;: &quot;{message?.role}
                              &quot;, &quot;content&quot;: &quot;
                              {message.content}&quot; &125;
                            </div>
                          </div>
                        )
                      )}
                  </section>

                  <div className="flex flex-col my-4">
                    <div className="text-md mb-4">LongWriter-6k</div>

                    <div className="flex justify-center gap-4 mb-4 items-center">
                      <div>[LongWriter Dataset]</div>
                      <div>[Github Repo]</div>
                      <div>[LongWriter Paper]</div>
                    </div>

                    <div>
                      LongWriter-6k dataset contains 6,000 SFT data with
                      ultra-long output ranging from 2k-32k words in length(both
                      English and Chinese). The data can support training LLMs
                      to extend their maximum output window size to 10,000+
                      words.
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <section className="flex flex-col gap-4 items-start text-sm rounded-none text-stone-300">
                      <h2 className="text-lg font-medium text-white">
                        All Models
                      </h2>
                      <p className="mt-2.5 leading-6 max-md:max-w-full">
                        We open-sourced the following list of models trained on
                        LongWriter-6k:
                      </p>
                      <div className="flex gap-5 justify-between mt-9  w-full font-semibold leading-6 max-w-[790px] max-md:max-w-full">
                        <div className="grow shrink w-[123px] text-center ">
                          Model
                        </div>
                        <div className="grow shrink w-[123px] text-center ">
                          Huggingface Repo
                        </div>
                        <div className="grow shrink w-[123px] text-center ">
                          Description
                        </div>
                      </div>
                      <hr className="shrink-0 self-stretch mt-4 w-full h-px border border-solid border-zinc-800 max-md:mr-1" />
                      {datasets.map((model, index) => (
                        <React.Fragment key={model.name}>
                          <div className="flex flex-wrap items-center gap-5 mt-4 w-full leading-6 max-w-[979px] max-md:max-w-full">
                            <div className="grow shrink w-[123px] text-center ">
                              name
                            </div>
                            <div className="grow shrink w-[93px] text-center">
                              repo
                            </div>
                            <div className="grow shrink w-[389px] text-center">
                              description
                            </div>
                          </div>
                          {index < datasets.length - 1 && (
                            <hr className="shrink-0 self-stretch mt-5 w-full h-px border border-solid border-zinc-800 max-md:mr-1" />
                          )}
                        </React.Fragment>
                      ))}
                    </section>

                    <section className="flex flex-col items-start text-sm rounded-none text-stone-300">
                      <h2 className="text-lg font-medium text-white">
                        Citation
                      </h2>
                      <p className="mt-2.5 leading-6">
                        If you find our work useful, please consider citing
                        LongWriter:
                      </p>
                      <div className="flex flex-wrap gap-10 self-stretch px-7 py-5 mt-6 w-full leading-6 bg-black rounded-xl border border-solid border-zinc-800 max-md:px-5 max-md:max-w-full">
                        <pre className="flex-auto w-[842px] max-md:max-w-full whitespace-pre-wrap">
                          <p>
                            "@articlelongwriter, title=LongWriter: A Large-Scale
                            Transformer Model for Ultra-Long Text Generation,
                            author=LongWriter Authors, journal=arXiv preprint
                            arXiv:2109.15006, year={2021}"
                          </p>
                        </pre>
                        <button
                          aria-label="Copy citation"
                          className="focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <img
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f88989020ed69ad1820c070d7cb37c2e3bca5794df093c04ae53560ba14a12ea?placeholderIfAbsent=true&apiKey=3ffd321d22914a748ca8bbca39c4d0b3"
                            alt=""
                            className="object-contain shrink-0 self-start mt-1.5 rounded aspect-[1.06] w-[18px]"
                          />
                        </button>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
              <div className="md:w-1/3 p-2 border border-b border-solid border-zinc-700 ">
                <section className="flex flex-col rounded-none max-w-[472px]">
                  <header className="flex flex-col pl-8 w-full">
                    <div className="flex gap-2.5">
                      <h2 className="grow text-sm font-medium text-zinc-500">
                        Downloads last month
                      </h2>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/673db38efa22c8095b632bebfca9ad217de0b8334e91b4f78a653ac14b42e97f?placeholderIfAbsent=true&apiKey=3ffd321d22914a748ca8bbca39c4d0b3"
                        alt=""
                        className="object-contain my-auto w-full aspect-[250]"
                      />
                      <span className="text-base font-semibold text-stone-300">
                        {data?.downloads}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex gap-5 self-start mt-4 text-sm leading-none text-neutral-400">
                        <select
                          className="border border-solid bg-zinc-950 border-gray-800 rounded-md px-4 py-2"
                          name="dataset"
                          id="dataset"
                        >
                          <option
                            className="border border-solid bg-zinc-950 border-gray-800 rounded-md px-4 py-2"
                            value="Use this DataSet"
                          >
                            <IoCodeSlash />
                            Use this DataSet
                          </option>
                        </select>
                      </div>
                      <div className="flex gap-5 self-start mt-4 text-sm leading-none text-neutral-400">
                        <select
                          className="border border-solid bg-zinc-950 border-gray-800 rounded-md px-4 py-2"
                          name="dataset"
                          id="dataset"
                        >
                          <option
                            className="border border-solid bg-zinc-950 border-gray-800 rounded-md px-4 py-2"
                            value="Use this DataSet"
                          >
                            <FaRegEdit />
                            Edit this DataSet
                          </option>
                        </select>
                      </div>
                      <div className="flex gap-5 self-start mt-4 text-sm leading-none text-neutral-400">
                        <button className="border border-solid bg-zinc-950 border-gray-800 rounded-md px-4 py-2">
                          <CiMenuKebab />
                        </button>
                      </div>
                    </div>
                    <div className="my-2">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/b5377c7fee86346dd9c1d26a3fa548d5df13429853a9de9978473f1cd81c1bac?placeholderIfAbsent=true&apiKey=3ffd321d22914a748ca8bbca39c4d0b3"
                        alt="Dataset statistics graph"
                        className="object-contain self-start mt-5 w-full"
                      />
                    </div>
                    <div className="flex justify-start flex-wrap items-center gap-2">
                      <div className=" border border-solid bg-zinc-950 border-gray-800 rounded-md px-4 py-2">
                        Size of downloaded dataset files: 67.4 kB
                      </div>
                      <div className="border border-solid bg-zinc-950 border-gray-800 rounded-md px-4 py-2">
                        Size of the auto-converted Parquet files: 43.2 kB
                      </div>
                      <div className="border border-solid bg-zinc-950 border-gray-800 rounded-md px-4 py-2">
                        Number of rows: 2,199
                      </div>
                    </div>
                    <div className="my-2">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/b5377c7fee86346dd9c1d26a3fa548d5df13429853a9de9978473f1cd81c1bac?placeholderIfAbsent=true&apiKey=3ffd321d22914a748ca8bbca39c4d0b3"
                        alt="Dataset statistics graph"
                        className="object-contain self-start mt-5 w-full"
                      />
                    </div>

                    <div className="my-2">
                      <div className="w-full text-white"></div>

                      <div className="flex flex-col gap-2">
                        {datasets.length > 0 &&
                          datasets.map((data: Dataset, index: number) => (
                            <article
                              onClick={() => {
                                router.push(`main/${data.name}`);
                              }}
                              className="flex flex-col text-sm leading-none rounded-none max-w-[487px]"
                            >
                              <div className="flex flex-wrap gap-5 py-3.5 pr-14 pl-5 w-full bg-black rounded-md border border-solid border-zinc-700 max-md:px-5 max-md:max-w-full hover:bg-slate-800 cursor-pointer ">
                                <div className="flex flex-auto gap-1">
                                  <div className="flex flex-col grow gap-2 shrink-0 basis-0 w-fit">
                                    <h2 className="self-start text-white">
                                      {data.name}
                                    </h2>
                                    <div className="flex flex-row justify-start items-center gap-2 text-neutral-500">
                                      <div className="flex gap-1">
                                        <span>
                                          <IoMdGrid />
                                        </span>
                                        <span>Viewer</span>
                                      </div>
                                      <GoDotFill />
                                      <div className="flex gap-1">
                                        <span>Updated {data.updatedDate}</span>
                                      </div>
                                      <GoDotFill />
                                      <div className="flex gap-1">
                                        <span>
                                          <MdFileDownload />
                                        </span>
                                        <span>{data.downloads}</span>
                                      </div>
                                      <GoDotFill />
                                      <div className="flex gap-1">
                                        <span>
                                          <CiHeart />
                                        </span>
                                        <span>{data.stars}</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </article>
                          ))}
                      </div>

                      <Link href="/">
                        Browse 19 more Models based on this model
                      </Link>
                    </div>
                  </header>
                </section>
              </div>
            </div>
          )}
          {activeTab === "Viewers" && <div>{activeTab}</div>}
          {activeTab === "Files and Versions" && (
            <div className="p-4">
              <section className="flex justify-between mb-4 items-center flex-wrap gap-10 rounded-none">
                <div className="flex gap-3.5 text-sm leading-none whitespace-nowrap text-neutral-400">
                  <div className="bg-zinc-800 border-zinc-700 text-neutral-400 rounded-md flex justify-center items-center px-2 py-1 ">
                    <IoIosGitNetwork />
                    <select
                      className="bg-zinc-800 border-zinc-700 text-neutral-400"
                      name="branch"
                      id="branch"
                    >
                      <option className="px-2 py-1" value="Main">
                        Main
                      </option>
                      <option className="px-2 py-1" value="Branch">
                        Branch
                      </option>
                    </select>
                  </div>
                  <h2 className="my-auto">Longwik</h2>
                </div>
                <div className="flex gap-7 items-center">
                  <div className="flex flex-col justify-center items-center self-stretch px-0.5 my-auto w-5 h-5 bg-violet-500 rounded-full border border-solid border-stone-300">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/fcbe3e3ea3caef502d6e61008557f88e5260b8eaca2ebcdda7dbe2db92446d24?placeholderIfAbsent=true&apiKey=3ffd321d22914a748ca8bbca39c4d0b3"
                      alt=""
                      className="object-contain z-10 w-5 rounded-full aspect-square"
                    />
                  </div>
                  <p className="self-stretch my-auto text-sm leading-none text-neutral-400">
                    {data.forks} contributors
                  </p>
                  <button className="flex gap-2 self-stretch px-3 py-1.5 text-sm leading-none rounded-md border border-solid bg-zinc-800 border-zinc-700 text-neutral-400">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/af336e2f2e3523f0e6773064038bdcad68176605edb845336c948ebe3297d450?placeholderIfAbsent=true&apiKey=3ffd321d22914a748ca8bbca39c4d0b3"
                      alt=""
                      className="object-contain shrink-0 my-auto aspect-[0.73] w-[11px]"
                    />
                    <span className="basis-auto">
                      History: {data.forks} Commits
                    </span>
                  </button>
                </div>
              </section>
              <div className="flex flex-col text-base leading-none rounded-none text-neutral-400">
                <div className="flex flex-col pb-5 w-full rounded-t-xl border border-solid bg-zinc-950 border-zinc-800 max-md:max-w-full">
                  <header className="flex flex-wrap gap-5 justify-between px-5 py-4 w-full font-semibold rounded-t-xl border border-solid bg-zinc-800 border-zinc-800 max-md:max-w-full">
                    <div className="flex gap-5">
                      <div className="flex shrink-0 self-start bg-violet-500 rounded-full h-[13px] w-[13px]" />
                      <div>bys0318</div>
                      <div className="basis-auto">Update README.md</div>
                      <div>0db15c0</div>
                      <div>verified</div>
                    </div>
                    <div>15 days ago</div>
                  </header>
                  <section className="flex flex-wrap gap-5 justify-between items-center self-center mt-3.5 w-full max-w-[1450px] max-md:max-w-full">
                    <ul className="w-full flex flex-col self-stretch my-auto whitespace-nowrap list-none p-0">
                      {datasets.map((file, index) => (
                        <li className="w-full flex justify-between items-center gap-4 py-2 px-4 mt-2 border-b border-zinc-800 first:mt-0">
                          <div className="flex justify-start gap-2">
                            <CiFileOn />
                            <div>github.git</div>
                          </div>
                          <div className="flex gap-2">
                            <div>2.47 kB</div>
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4fdcfae6bb42aced8c44dbcabfc6b4f886b1b213842a10e5eb9f01c1647cf1d7?placeholderIfAbsent=true&apiKey=3ffd321d22914a748ca8bbca39c4d0b3"
                              className="object-contain shrink-0 w-5 aspect-[0.87]"
                              alt=""
                            />
                          </div>
                          <div>Upload 2 files</div>
                          <div className="">15 days ago</div>
                        </li>
                      ))}
                    </ul>
                  </section>
                </div>
              </div>
            </div>
          )}
          {activeTab === "Community" && <div>{activeTab}</div>}
        </div>
      </div>
    </div>
  );
};

export default DataCardPage;
