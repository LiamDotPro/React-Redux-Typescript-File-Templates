// GET
// export const  = async () => {
//     try {
//         const response = await fetch("");
//         const data = await response.json();
//         return ;
//     } catch (err) {
//         throw new Error("Something went wrong while trying to GET, error:" + err);
//     }
// };

// POST
// export const postNewRecord = async (someParam: any) => {
//     try {
//
//         let header = new Headers({
//             'Access-Control-Allow-Origin': '*',
//             'Content-Type': 'multipart/form-data'
//         });
//
//         const response = await fetch("", {
//             method: 'post',
//             mode: 'cors',
//             headers: header,
//             body: JSON.stringify(someParam),
//         });
//
//         let outcome = await response.text();
//
//         return outcome === 'ok';
//
//     } catch (err) {
//         throw new Error("Something went wrong while posting..., error" + err)
//   }
// };