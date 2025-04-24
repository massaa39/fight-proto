import fs from 'fs';

// 開発版でロギングやキャッシュに使う
export function saveData(filename: string, data: any) {
  fs.writeFileSync(filename, JSON.stringify(data, null, 2));
}
