> In this guide, we'll walk through exactly how to host your application on [**Vercel**](https://vercel.com), connect a custom domain, and configure DNS the right way. No hand-wavy steps. No skipped details. Just a clear, practical walkthrough from deployment to a live, secure URL.

Before we jump in, there's one important thing to understand:

## You don't actually need a custom domain to publish your website

Most hosting providers (including **Vercel**), automatically generate a default subdomain for you. That means your project can go live immediately, without touching DNS or buying a domain. It usually looks something like this:

`your-project-name.vercel.app`

It's fast, It works, and for many projects, it's completely fine.

## Step-by-step instructions

> We'll be using [**GitHub**](https://github.com) as the Git provider and [**GoDaddy**](https://www.godaddy.com) as the domain registrar where we'll configure DNS.

### Step 1: Create a Vercel Account and Import Your Repository

1. Go to [https://vercel.com/signup](https://vercel.com/signup) and create an account, after that, you will redirected to [https://vercel.com/new](https://vercel.com/new), that screen has the option to import a Git Repository.

![Vercel Import Git Repository](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/azkdp1md16famf5y744i.png)

2. Select **Continue with GitHub** and then grant **Vercel** permission to access your repositories.

3. After that, **Vercel** will ask you to install their GitHub application. After installing, **you should have a list of all your repositories**.

   ![Github Install Application Request](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/1gqcwm69wuye0an70c6g.png)

   ![Github Permissions Request](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/tc6kbqn3qvpowbwl67zn.png)

4. Click **Import** on the repository you want to deploy.

### Step 2: Configure Your Project

5. You'll be greeted with a simple setup screen where you define the type of project you want to deploy.

   There's an **Application Preset** dropdown that includes several common frameworks, each with pre-configured build and output settings. If you're using something standard like Next.js, React, or another popular framework, you can simply select the appropriate preset and Vercel will handle the rest.

   If your project requires custom build commands or a specific output directory, you can manually configure those settings instead.

6. After clicking **Deploy** with a successful build (even if it doesn't, you are still allowed to visit your project dashboard), you will be greeted with your project dashboard.

![Vercel Congratulations Deploy Screen](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/6ayrsunz4kpstvfjsxns.png)

### And that's it.

You now have a project live on the world wide web 🎉

From this point forward, every time you push to your main branch, **Vercel** will automatically trigger a new build and deployment. No manual uploads. No FTP. Just push your code and it ships.

I won't go deep into the Vercel Project Dashboard here, but inside it you'll find your live site under the **Production Deployment** card. You can click the **"Visit"** button to open it, or view the default domain listed in the **Domains** section of that same card.

Now let's talk about what we're really here for: **configuring your custom domain.**

---

## Adding Your Domain in Vercel

1. Go to your **Project Dashboard**.

2. Click **Domains** in the left sidebar.

3. Click **Add Existing**, enter your domain name, and click **Save**.

Vercel will now display two DNS records you need to configure for your domain: one **A record** pointing your root domain (`@`) to Vercel's IP address, and one **CNAME record** that routes the `www` subdomain to your Vercel deployment URL.

**Keep this tab open we'll use those values in the next steps.**

---

## Configuring Your Domain

Now let's connect your domain to your hosting provider.

> For this walkthrough, we'll use **GoDaddy** to demonstrate the setup steps. This process is nearly identical across most domain registrars.

1. In GoDaddy, click your profile in the top-right corner and go to **My Products**.

2. Locate your domain and click **DNS**.

You'll now see your domain's DNS management screen.

---

### Step 1: Configure the A Record

We're going to point your root domain (e.g., `yourdomain.com`) to your hosting provider.

Look for an existing record with:

- **Type:** A
- **Name:** @

If it exists:

- Click **Edit**
- Replace the **Value** with the A record value provided by **Vercel** [here](#adding-your-domain-in-vercel)
- Click **Save**

If it doesn't exist:

- Click **Add**
- Enter the following:
  - **Type:** A
  - **Name:** @
  - **Value:** (the A record value from Vercel [here](#adding-your-domain-in-vercel))
  - **TTL:** Leave as default
- Click **Save**

---

### Step 2: Configure the CNAME Record (www)

Next, we'll connect the `www` version of your domain. This will make the traffic from `www.yourdomain.com` to be routed correctly without needing to expose a direct IP address.

What we're essentially saying is: `www.yourdomain.com → yourproject.vercel.app`

To configure it:

- Click **Add**
- Enter:
  - **Type:** CNAME
  - **Name:** www
  - **Value:** (the CNAME value provided by Vercel)
  - **TTL:** Leave as default
- Click **Save**

---

### Done! 🎉

We've updated **GoDaddy's** DNS records to tell the internet where our website lives.

This DNS changes usually propagate **within 5–10 minutes**, but in some cases it can take up to an hour. Once propagation completes, your custom domain will be fully connected to your **Vercel** project, with **automatic SSL handled** for you.

### Your app is now live, on your own domain.
