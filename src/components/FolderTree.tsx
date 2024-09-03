"use client";
import React, { useState, useEffect } from "react";
import { Tree, NodeRendererProps } from "react-arborist";
import { transformData } from "@/utils/helper";
import { FaFolder, FaFolderOpen } from "react-icons/fa";
import { FaRegFile } from "react-icons/fa6";
import TimeAgo from "@/components/TimeAgo";

interface CommitInfo {
  committer_email: string;
  id: string;
  last_commit_date: string;
  name: string;
  commit_name: string;
}

const FolderStructure: React.FC = () => {
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [openFolderId, setOpenFolderId] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/file.json");
      const jsonData = await response.json();
      const transformedData = transformData(jsonData);
      setData(transformedData);
      setLoading(false);
    };
    fetchData();
  }, []);

  const Node: React.FC<NodeRendererProps<any>> = ({ node, style, tree }) => {
    const data = node.data as CommitInfo;
    const handleToggle = (e: React.MouseEvent) => {
      e.stopPropagation();
      if (node.isInternal) {
        if (node.id === openFolderId) {
          setOpenFolderId(null);
          tree.close(node.id);
        } else {
          if (openFolderId) {
            tree.close(openFolderId);
          }
          setOpenFolderId(node.id);
          tree.open(node.id);
        }
      }
    };

    return (
      <div
        key={node.id}
        style={{ ...style, width: "100%" }}
        onClick={handleToggle}
      >
        <div className="flex items-center gap-4 py-2 px-4 border-b border-zinc-800">
          <div className="flex items-center gap-2 w-1/4 min-w-0">
            {node.isInternal ? (
              node.isOpen ? (
                <FaFolderOpen className="w-5 h-5 flex-shrink-0" />
              ) : (
                <FaFolder className="w-5 h-5 flex-shrink-0" />
              )
            ) : (
              <FaRegFile className="w-5 h-5 flex-shrink-0" />
            )}
            <div className="truncate">{data.name}</div>
          </div>
          <div className="w-1/4 truncate">{data.commit_name}</div>
          <div className="w-1/4 truncate">{data.committer_email}</div>
          <div className="w-1/4 text-sn truncate flex justify-end">
            <TimeAgo date={new Date(data.last_commit_date)} />
          </div>
        </div>
      </div>
    );
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full h-fit">
      <Tree
        initialData={data}
        openByDefault={false}
        className="w-full"
        indent={24}
        rowHeight={40}
        overscanCount={5}
        width="100%"
        // onToggle={(node) => {
        //   if (node.) {
        //     if (node.isOpen) {
        //       setOpenFolderId(node.id);
        //     } else {
        //       setOpenFolderId(null);
        //     }
        //   }
        // }}
      >
        {Node}
      </Tree>
    </div>
  );
};

export default FolderStructure;
