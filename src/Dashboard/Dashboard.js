import * as React from "react";
import { Card, CardContent, CardHeader } from '@mui/material';
import DateTime from "./dateTime";

export default () => (
    <Card>
        <CardHeader title="Welcome to the SnapLapse administration portal!" />
        <CardContent>
            <DateTime />
        </CardContent>
    </Card>
);