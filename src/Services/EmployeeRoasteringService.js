// IMPORT DATA FROM STATIC JSON FILE
import data from './sample-data.json';

export const fetchCompanyInfoFromData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data.companyInfo);
        }, 1000);
    });
};