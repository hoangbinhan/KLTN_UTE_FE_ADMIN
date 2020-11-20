// libs
import React from "react";
import moment from "moment";
import { DatePicker } from "antd";
import queryString from "query-string";
// others
import "./style.scss";
import { useRouter } from "@/hooks";

const { RangePicker } = DatePicker;

const DateTimePicker: React.FC = () => {
  const router = useRouter();
  const defaultValueSelectFromDate = router.query.from_date ? moment(router.query.from_date) : null;
  const defaultValueSelectToDate = router.query.to_date ? moment(router.query.to_date) : null;

  const onChange = (dates: any, dateStrings: any) => {
    if (dates !== null) {
      const fromDate = `${dateStrings[0]}`;
      const toDate = `${dateStrings[1]}`;
      const currentParam = {
        ...router.query,
        from_date: fromDate,
        to_date: toDate,
      };
      router.push(`${router.pathname}?${queryString.stringify(currentParam)}`);
    } else {
      const currentParam = { ...router.query };
      delete currentParam.from_date;
      delete currentParam.to_date;
      router.push(`${router.pathname}?${queryString.stringify(currentParam)}`);
    }
  };

  return (
      <RangePicker
        className='filter-control-date-wrapper'
        value={[defaultValueSelectFromDate, defaultValueSelectToDate]}
        onChange={onChange}
        getPopupContainer={(trigger: any) => trigger.parentNode}
        ranges={{
          Today: [moment(), moment()],
          "This Week": [moment().startOf("week"), moment().endOf("week")],
          "This Month": [moment().startOf("month"), moment().endOf("month")],
        }}
      />
  );
};

export default DateTimePicker;
