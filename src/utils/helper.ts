export function transformData(jsonData: any[]): any {
  const fileTree: { [key: string]: any } = {};

  jsonData.forEach((item) => {
    const pathParts = item.file.path.split("/");
    let currentLevel = fileTree;

    pathParts.forEach((part: any, index: any) => {
      if (!currentLevel[part]) {
        currentLevel[part] = {
          id: item.file.id,
          name: part,
          last_commit_date: item.latest_commit.created_at,
          committer_email: item.latest_commit.committer_email,
          commit_name: item.latest_commit.title,
          children: {},
        };
      }
      if (index === pathParts.length - 1) {
        currentLevel[part].id = item.file.id;
        currentLevel[part].last_commit_date = item.latest_commit.created_at;
        currentLevel[part].committer_email = item.latest_commit.committer_email;
        currentLevel[part].commit_name = item.latest_commit.title;
      } else {
        currentLevel = currentLevel[part].children;
      }
    });
  });

  function convertToArray(obj: any) {
    return Object.keys(obj).map((key) => {
      const node = obj[key];
      const result = {
        id: node.id,
        name: node.name,
        last_commit_date: node.last_commit_date,
        committer_email: node.committer_email,
        commit_name: node.commit_name,
      } as {
        id: any;
        name: any;
        last_commit_date: any;
        committer_email: any;
        commit_name: any;
        children?: any[];
      };
      if (Object.keys(node.children).length > 0) {
        result.children = convertToArray(node.children);
      }
      return result;
    });
  }

  return convertToArray(fileTree);
}
