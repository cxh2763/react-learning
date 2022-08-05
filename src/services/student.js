const appkey = '276314445_1590670332060';

/**
 * 
 * @returns 获取所有学生
 */
export async function getAllStudents() {
  return await fetch(`https://open.duyiedu.com/api/student/findAll?appkey=${appkey}`)
    .then(resp => resp.json()).then(resp => resp.data)
}