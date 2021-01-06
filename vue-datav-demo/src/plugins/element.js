import {
  Row,
  Col,
  Button,
  Card,
  Radio,
  DatePicker,
  Table
} from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
export default app => {
  [Row, Col, Button, Card, Radio, DatePicker, Table].forEach(c => app.use(c));
};
