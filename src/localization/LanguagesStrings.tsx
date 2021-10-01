import LocalizedStrings from 'react-native-localization';

const StringsOfLanguages = new LocalizedStrings({
  ar: {
    top5countries: 'أعلى 5 دول',
    global: 'عالمي',
    reportCase: 'الإبلاغ عن حالة',
    viewAll: 'مشاهدة الكل',
    globalDeaths: 'الوفيات العالمية',
    recoveries:'المستردات',
    activeCases:'الحالات المصابة حاليا',
    recovered: 'تعافى',
    deaths:'حالات الوفاة',
    active:'نشيط',
    searchByCountry:'البحث عن طريق اسم الدولة',
    success:'النجاح',
    error:'خطأ',
    newCaseReported: 'تم الإبلاغ عن حالة جديدة',
    enterAllTheFields:'الرجاء إدخال جميع الحقول'
  },
  en: {
    top5countries: 'Top 5 countries',
    global: 'Global',
    reportCase: '+',
    viewAll: 'View All',
    globalDeaths: 'Global deaths',
    recoveries:'Recoveries',
    activeCases:'Active Cases',
    recovered: 'Recovered',
    deaths:'Deaths',
    active:'Active',
    searchByCountry:'Search by country name',
    success:'Success',
    error:'Error',
    newCaseReported: 'New case reported',
    enterAllTheFields:'Please enter all the fields',
    enterNumberOfCase:'Enter number of cases'
  }
});

export default StringsOfLanguages;