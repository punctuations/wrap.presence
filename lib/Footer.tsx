import { Divider, Grid, Spacer } from "@geist-ui/react";
import { useRouter } from 'next/router'

export function Footer() {
    const router = useRouter();

    return (
            <Grid style={{ width: "100%", position: "absolute", bottom: "20px" }}>
            <Spacer y={3} />
            <Divider />
            <Grid.Container gap={2} justify="space-around" alignItems="center">
                <Grid xs={10}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img onClick={() => router.push("https://presence.im/")} style={{ width: "12rem", cursor: "pointer" }} src="https://presence.im/presence.svg" alt="logo" />
                </Grid>
                <Grid xs={6}>
                    <a href="https://presence.im/privacy">Privacy Policy</a>
                </Grid>
                <Grid xs={6}>
                    <a href="https://presence.im/terms">Terms of Service</a>
                </Grid>
            </Grid.Container>
        </Grid>
    );
}