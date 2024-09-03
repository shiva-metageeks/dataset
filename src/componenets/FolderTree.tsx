import React from "react";
import { Tree } from "react-arborist";

interface FileData {
  id: string;
  name: string;
  type: "blob" | "tree";
  path: string;
  mode: string;
}

interface CommitData {
  id: string;
  short_id: string;
  created_at: string;
  title: string;
  message: string;
  author_name: string;
  author_email: string;
  committer_name: string;
  committer_email: string;
}

interface TreeData {
  id: string; // Add this line
  file: FileData;
  latest_commit: CommitData;
  children?: TreeData[];
}

const FolderTree: React.FC<{ data: TreeData[] }> = ({ data }) => {
  // Transform the flat data into a hierarchical structure
  const transformData = (items: TreeData[]): TreeData[] => {
    const map = new Map<string, TreeData>();
    const roots: TreeData[] = [];

    items.forEach((item) => {
      map.set(item.file.path, { ...item, id: item.file.path, children: [] });
    });

    items.forEach((item) => {
      const node = map.get(item.file.path)!;
      const parentPath = item.file.path.split("/").slice(0, -1).join("/");
      const parent = map.get(parentPath);

      if (parent) {
        parent.children?.push(node);
      } else {
        roots.push(node);
      }
    });

    return roots;
  };

  const treeData = transformData(data);

  return <Tree initialData={treeData} />;
};

export default FolderTree;
