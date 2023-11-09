import AsyncStorage from '@react-native-async-storage/async-storage';

// 비동기 작업, 로컬 저장소 데이터 저장
export async function setLocalData(key, str) {
    try {
        await AsyncStorage.setItem(key, str);
        return true;
    } catch (e) {
        return false;
    }
}

// 비동기 작업, 로컬 저장소 데이터 조회
export async function getLocalData(key) {
    try {
        console.log('[async] 로컬데이터 조회');
        const data = await AsyncStorage.getItem(key);
        return data;
    } catch (e) {
        return '';
    }
}
