import { StartFunc as StartFuncFetchFromFuncs } from "./FetchFromFuncs/Entry.js";

let StartFunc = async () => {
    let jVarLocalGrossAmount = jFLocalGrossAmountId();

    if (parseInt(jVarLocalGrossAmount) > 0 === false) {
        return false;
    };

    let jVarLocalQrCode = await StartFuncFetchFromFuncs();
    console.log("jVarLocalQrCode : ", jVarLocalQrCode);
    if (jVarLocalQrCode === false) {
        return false;
    };

    swal.fire({ icon: "erroe", title: "Not Sale" });
    return false;
};

let jFLocalCheckQrCode = async () => {
    let jVarLocalQrCode = jFLocalQrCode();
    let jVarLocalUrl = `/bin/BillsQrCode/Filter/pk/${jVarLocalQrCode}`;
    const response = await fetch(jVarLocalUrl);

    if (response.status === 200) {
        return true;
    };

    return false;
};

let jFLocalCheckSales = async () => {
    let jVarLocalQrCode = jFLocalQrCode();
    let jVarLocalUrl = `/bin/BillsQrCode/FilterData/pk/${jVarLocalQrCode}`;
    const response = await fetch(jVarLocalUrl);

    if (response.status === 200) {
        return true;
    };

    swal.fire({ icon: "erroe", title: "Not Sale" });
    return false;
};

let jFLocalQrCode = () => {
    let jVarLocalQrCode = 'QrCode'
    let jVarLocalHtmlId = document.getElementById(jVarLocalQrCode);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};

let jFLocalGrossAmountId = () => {
    let jVarLocalGrossAmountId = 'GrossAmountId'
    let jVarLocalHtmlId = document.getElementById(jVarLocalGrossAmountId);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};

export { StartFunc }