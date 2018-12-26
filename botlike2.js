
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
  <link rel="dns-prefetch" href="https://github.githubassets.com">
  <link rel="dns-prefetch" href="https://avatars0.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars1.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars2.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars3.githubusercontent.com">
  <link rel="dns-prefetch" href="https://github-cloud.s3.amazonaws.com">
  <link rel="dns-prefetch" href="https://user-images.githubusercontent.com/">



  <meta name="viewport" content="initial-scale=1.0,user-scalable=no,maximum-scale=1,width=device-width">
  <meta name="selected-link" value="repo_source">

  
<meta name="octolytics-dimension-device" content="mobile" />
<meta name="octolytics-dimension-user_id" content="42664260" /><meta name="octolytics-dimension-user_login" content="rrudy0966" /><meta name="octolytics-dimension-repository_id" content="145941367" /><meta name="octolytics-dimension-repository_nwo" content="rrudy0966/instatools" /><meta name="octolytics-dimension-repository_public" content="true" /><meta name="octolytics-dimension-repository_is_fork" content="false" /><meta name="octolytics-dimension-repository_network_root_id" content="145941367" /><meta name="octolytics-dimension-repository_network_root_nwo" content="rrudy0966/instatools" /><meta name="octolytics-dimension-repository_explore_github_marketplace_ci_cta_shown" content="false" />


<meta name="octolytics-host" content="collector.githubapp.com" /><meta name="octolytics-app-id" content="github" /><meta name="octolytics-event-url" content="https://collector.githubapp.com/github-external/browser_event" /><meta name="octolytics-dimension-request_id" content="BC2E:3D9D:3862506:52D3104:5C23EDE6" /><meta name="octolytics-dimension-region_edge" content="ap-southeast-1" /><meta name="octolytics-dimension-region_render" content="iad" /><meta name="octolytics-actor-id" content="46169504" /><meta name="octolytics-actor-login" content="myprofit29" /><meta name="octolytics-actor-hash" content="f8a016f81ea93f6f79de4155d67341e8d535877168a0f3887d8c509c9c9de679" />
<meta name="analytics-location" content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" />



    <meta name="google-analytics" content="UA-3769691-2">

  <meta class="js-ga-set" name="userId" content="51801629a03a5a13b554bb51a416ef9d" %>

<meta class="js-ga-set" name="dimension1" content="Logged In">

  <meta class="js-ga-set" name="dimension3" content="mobile">


  

  <title>instatools/botlike2.js at master · rrudy0966/instatools</title>

  <link crossorigin="anonymous" media="all" integrity="sha512-s20VE9qeFwbxacA8YRN9gth1ynbyhBiecD11Ux6ayxgyAqhM7hdGNOMjAo/xtC6Z+xwTV2Fw+d5LGWtsl94dsg==" rel="stylesheet" href="https://github.githubassets.com/assets/mobile-23d45bdf0450ccc7391d03a5e69d6f08.css" />


  <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">

  <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">

  <link rel="mask-icon" href="https://github.githubassets.com/pinned-octocat.svg" color="#000000">
  <link rel="icon" type="image/x-icon" class="js-site-favicon" href="https://github.githubassets.com/favicon.ico">

<meta name="theme-color" content="#1e2327">



  <link rel="manifest" href="/manifest.json" crossOrigin="use-credentials">

  </head>

  <body class="page-responsive">
    


  <header class="Header f5 lh-default clearfix">
    <div class="p-responsive flex-justify-between">
        <div class="d-flex flex-justify-between flex-items-center position-absolute right-0 left-0 px-3 mt-1">
          <div class="d-flex mx-2"><!-- placeholder for hamburger --></div>
          <div class="px-3 overflow-hidden">
                <div class="css-truncate css-truncate-target width-fit">
    <svg class="octicon octicon-repo" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
    <strong>
      <a class="text-white" href="/rrudy0966">rrudy0966</a>
    </strong> /
    <strong>
      <a class="text-white" href="/rrudy0966/instatools">instatools</a>
    </strong>
  </div>

          </div>

          <div class="d-flex">
            
              <a class="position-relative notification-indicator ml-3" href="/notifications"
                    aria-label="You have no unread notifications"
                  data-ga-click="Mobile, tap, location:header; text:Notifications">
                <span class="mail-status "></span>
                <svg height="16" class="octicon octicon-bell" viewBox="0 0 14 16" version="1.1" width="14" aria-hidden="true"><path fill-rule="evenodd" d="M14 12v1H0v-1l.73-.58c.77-.77.81-2.55 1.19-4.42C2.69 3.23 6 2 6 2c0-.55.45-1 1-1s1 .45 1 1c0 0 3.39 1.23 4.16 5 .38 1.88.42 3.66 1.19 4.42l.66.58H14zm-7 4c1.11 0 2-.89 2-2H5c0 1.11.89 2 2 2z"/></svg>
              </a>
          </div>
        </div>


        <details class="details-reset">
          <summary class="mt-1 float-left position-relative user-select-none" data-ga-click="Mobile, tap, location:header; text:Hamburger">
            <svg height="24" class="octicon octicon-three-bars notification-indicator" viewBox="0 0 12 16" version="1.1" width="18" aria-hidden="true"><path fill-rule="evenodd" d="M11.41 9H.59C0 9 0 8.59 0 8c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zm0-4H.59C0 5 0 4.59 0 4c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zM.59 11H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1H.59C0 13 0 12.59 0 12c0-.59 0-1 .59-1z"/></svg>
          </summary>
              <div style="clear: both;">
        <div class="py-3">
          <div class="header-search scoped-search site-scoped-search js-site-search position-relative "
  role="search"
>
  <div class="position-relative">
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="js-site-search-form" data-scope-type="Repository" data-scope-id="145941367" data-scoped-search-url="/rrudy0966/instatools/search" data-unscoped-search-url="/search" action="/rrudy0966/instatools/search" accept-charset="UTF-8" method="get"><input name="utf8" type="hidden" value="&#x2713;" />
      <label class="form-control header-search-wrapper  js-chromeless-input-container">
            <a class="header-search-scope no-underline" href="/rrudy0966/instatools/blob/master/botlike2.js">This repository</a>
        <input type="text"
          class="form-control header-search-input  js-site-search-focus js-site-search-field is-clearable"
          data-hotkey="s,/"
          name="q"
          value=""
          placeholder="Search"
          data-unscoped-placeholder="Search GitHub"
          data-scoped-placeholder="Search"
          autocapitalize="off"
          aria-label="Search this repository"
          >
          <input type="hidden" class="js-site-search-type-field" name="type" >
      </label>
</form>  </div>
</div>

        </div>
      <ul class="text-bold list-style-none p-0 m-0">
            <li>
              <a href="/" data-ga-click="Mobile, tap, location:header; text:Dashboard" class="js-selected-navigation-item HeaderNavlink py-2 mt-3">
                Dashboard
              </a>
            </li>
            <li>
              <a class="js-selected-navigation-item HeaderNavlink py-2" href="/pulls">
                Pull requests
</a>            </li>
            <li>
              <a class="js-selected-navigation-item HeaderNavlink py-2" href="/issues">
                Issues
</a>            </li>
              <li>
                <a class="js-selected-navigation-item HeaderNavlink py-2" data-ga-click="Mobile, tap, location:header; text:Marketplace" href="/marketplace">
                  Marketplace
</a>              </li>
          <li>
            <a href="/explore" data-ga-click="Mobile, tap, location:header; text:Explore" class="js-selected-navigation-item HeaderNavlink py-2">
              Explore
            </a>
          </li>
            <li>
              <a href="/myprofit29" data-ga-click="Mobile, tap, location:header; text:User avatar" class="js-selected-navigation-item HeaderNavlink py-2">
                <img class="avatar" src="https://avatars2.githubusercontent.com/u/46169504?s=40&amp;v=4" width="20" height="20" alt="@myprofit29" />
                myprofit29
              </a>
            </li>
            <li>
              <a href="/logout" data-ga-click="Mobile, tap, location:header; text:Sign out" class="HeaderNavlink py-2" style="padding-left: 2px;">
                <svg style="margin-right: 2px;" class="octicon octicon-sign-out v-align-middle" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 9V7H8V5h4V3l4 3-4 3zm-2 3H6V3L2 1h8v3h1V1c0-.55-.45-1-1-1H1C.45 0 0 .45 0 1v11.38c0 .39.22.73.55.91L6 16.01V13h4c.55 0 1-.45 1-1V8h-1v4z"/></svg>
                Sign out
              </a>
            </li>
      </ul>
    </div>

        </details>
    </div>
  </header>

    



    




<div class="reponav-wrapper lh-default">
  <nav class="reponav js-reponav"
       itemscope
       itemtype="http://schema.org/BreadcrumbList">

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a class="js-selected-navigation-item selected reponav-item" itemprop="url" aria-current="page" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches repo_packages /rrudy0966/instatools" href="/rrudy0966/instatools">
        <span itemprop="name">Code</span>
        <meta itemprop="position" content="1">
</a>    </span>

      <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
        <a itemprop="url" class="js-selected-navigation-item reponav-item" data-selected-links="repo_issues repo_labels repo_milestones /rrudy0966/instatools/issues" href="/rrudy0966/instatools/issues">
          <span itemprop="name">Issues</span>
          <span class="Counter">0</span>
          <meta itemprop="position" content="2">
</a>      </span>

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a itemprop="url" class="js-selected-navigation-item reponav-item" data-selected-links="repo_pulls checks /rrudy0966/instatools/pulls" href="/rrudy0966/instatools/pulls">
        <span itemprop="name">Pull requests</span>
        <span class="Counter">1</span>
        <meta itemprop="position" content="3">
</a>    </span>

      <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
        <a itemprop="url" class="js-selected-navigation-item reponav-item" data-selected-links=" /rrudy0966/instatools/projects" href="/rrudy0966/instatools/projects">
          <span itemprop="name">Projects</span>
          <span class="Counter">0</span>
          <meta itemprop="position" content="4">
</a>      </span>

      <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
        <a itemprop="url" class="js-selected-navigation-item reponav-item" data-selected-links=" /rrudy0966/instatools/wiki" href="/rrudy0966/instatools/wiki">
          <span itemprop="name">Wiki</span>
          <meta itemprop="position" content="5">
</a>      </span>

      <a class="js-selected-navigation-item reponav-item" data-selected-links="pulse /rrudy0966/instatools/pulse" href="/rrudy0966/instatools/pulse">
        Pulse
</a>
      <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
        <a class="js-selected-navigation-item reponav-item" data-selected-links="community /rrudy0966/instatools/community" href="/rrudy0966/instatools/community">
          Community
</a>      </span>

  </nav>
</div>

<div id="js-flash-container">

</div>




<div class="breadcrumb blob-breadcrumb">
  <label for="blob-history-checkbox" class="blob-history-label">
    <svg class="octicon octicon-history" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 13H6V6h5v2H8v5zM7 1C4.81 1 2.87 2.02 1.59 3.59L0 2v4h4L2.5 4.5C3.55 3.17 5.17 2.3 7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-.34.03-.67.09-1H.08C.03 7.33 0 7.66 0 8c0 3.86 3.14 7 7 7s7-3.14 7-7-3.14-7-7-7z"/></svg>
  </label>
  <span class="filetype-icon"><svg aria-label="file" class="octicon octicon-file" viewBox="0 0 12 16" version="1.1" width="12" height="16" role="img"><path fill-rule="evenodd" d="M6 5H2V4h4v1zM2 8h7V7H2v1zm0 2h7V9H2v1zm0 2h7v-1H2v1zm10-7.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v12h10V5z"/></svg></span>
  <strong class="final-path">botlike2.js</strong>
</div>


<input id="blob-history-checkbox"
       class="js-blob-history-checkbox blob-history-checkbox"
       type="checkbox"
       data-url="/rrudy0966/instatools/latest_commit/master/botlike2.js">

<div class="blob-history">
  <a class="js-blob-history-link" href="/rrudy0966/instatools/commits/master/botlike2.js">
    Loading latest commit…
</a></div>

<div class="bg-white">
    <div class="blob-file-content js-file-line-container">
      <div class="highlighted-blob tab-size" data-tab-size="8"><div class="code-body highlight"><pre><div class='line js-file-line' id='LC1'><span class="pl-s"><span class="pl-pds">&#39;</span>use strict<span class="pl-pds">&#39;</span></span></div><div class='line js-file-line' id='LC2'><br></div><div class='line js-file-line' id='LC3'><span class="pl-k">const</span> <span class="pl-c1">Client</span> <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>instagram-private-api<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">V1</span>;</div><div class='line js-file-line' id='LC4'><span class="pl-k">const</span> <span class="pl-c1">delay</span> <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>delay<span class="pl-pds">&#39;</span></span>);</div><div class='line js-file-line' id='LC5'><span class="pl-k">const</span> <span class="pl-c1">chalk</span> <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>chalk<span class="pl-pds">&#39;</span></span>);</div><div class='line js-file-line' id='LC6'><span class="pl-k">const</span> <span class="pl-c1">inquirer</span> <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>inquirer<span class="pl-pds">&#39;</span></span>);</div><div class='line js-file-line' id='LC7'><br></div><div class='line js-file-line' id='LC8'><span class="pl-k">const</span> <span class="pl-c1">User</span> <span class="pl-k">=</span> [</div><div class='line js-file-line' id='LC9'>{</div><div class='line js-file-line' id='LC10'>&nbsp;&nbsp;&nbsp;&nbsp;type<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>input<span class="pl-pds">&#39;</span></span>,</div><div class='line js-file-line' id='LC11'>&nbsp;&nbsp;&nbsp;&nbsp;name<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>username<span class="pl-pds">&#39;</span></span>,</div><div class='line js-file-line' id='LC12'>&nbsp;&nbsp;&nbsp;&nbsp;message<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>[&gt;] Insert Username:<span class="pl-pds">&#39;</span></span>,</div><div class='line js-file-line' id='LC13'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="pl-en">validate</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">value</span>){</div><div class='line js-file-line' id='LC14'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="pl-k">if</span>(<span class="pl-k">!</span>value) <span class="pl-k">return</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Can<span class="pl-cce">\&#39;</span>t Empty<span class="pl-pds">&#39;</span></span>;</div><div class='line js-file-line' id='LC15'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="pl-k">return</span> <span class="pl-c1">true</span>;</div><div class='line js-file-line' id='LC16'>&nbsp;&nbsp;}</div><div class='line js-file-line' id='LC17'>},</div><div class='line js-file-line' id='LC18'>{</div><div class='line js-file-line' id='LC19'>&nbsp;&nbsp;&nbsp;&nbsp;type<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>password<span class="pl-pds">&#39;</span></span>,</div><div class='line js-file-line' id='LC20'>&nbsp;&nbsp;&nbsp;&nbsp;name<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>password<span class="pl-pds">&#39;</span></span>,</div><div class='line js-file-line' id='LC21'>&nbsp;&nbsp;&nbsp;&nbsp;message<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>[&gt;] Insert Password:<span class="pl-pds">&#39;</span></span>,</div><div class='line js-file-line' id='LC22'>&nbsp;&nbsp;&nbsp;&nbsp;mask<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>*<span class="pl-pds">&#39;</span></span>,</div><div class='line js-file-line' id='LC23'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="pl-en">validate</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">value</span>){</div><div class='line js-file-line' id='LC24'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="pl-k">if</span>(<span class="pl-k">!</span>value) <span class="pl-k">return</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Can<span class="pl-cce">\&#39;</span>t Empty<span class="pl-pds">&#39;</span></span>;</div><div class='line js-file-line' id='LC25'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="pl-k">return</span> <span class="pl-c1">true</span>;</div><div class='line js-file-line' id='LC26'>&nbsp;&nbsp;}</div><div class='line js-file-line' id='LC27'>}</div><div class='line js-file-line' id='LC28'>]</div><div class='line js-file-line' id='LC29'><br></div><div class='line js-file-line' id='LC30'><span class="pl-k">const</span> <span class="pl-c1">Login</span> <span class="pl-k">=</span> <span class="pl-k">async</span> <span class="pl-k">function</span>(<span class="pl-smi">User</span>){</div><div class='line js-file-line' id='LC31'><br></div><div class='line js-file-line' id='LC32'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="pl-c"><span class="pl-c">/**</span> Save Account *<span class="pl-c">*/</span></span></div><div class='line js-file-line' id='LC33'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="pl-k">const</span> <span class="pl-c1">Device</span> <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Client.Device</span>(<span class="pl-smi">User</span>.<span class="pl-smi">username</span>);</div><div class='line js-file-line' id='LC34'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="pl-k">const</span> <span class="pl-c1">Storage</span> <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Client.CookieMemoryStorage</span>();</div><div class='line js-file-line' id='LC35'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="pl-k">const</span> <span class="pl-c1">session</span> <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Client.Session</span>(Device, <span class="pl-c1">Storage</span>);</div><div class='line js-file-line' id='LC36'><br></div><div class='line js-file-line' id='LC37'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="pl-k">try</span> {</div><div class='line js-file-line' id='LC38'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="pl-k">await</span> <span class="pl-smi">Client</span>.<span class="pl-smi">Session</span>.<span class="pl-en">create</span>(Device, <span class="pl-c1">Storage</span>, <span class="pl-smi">User</span>.<span class="pl-smi">username</span>, <span class="pl-smi">User</span>.<span class="pl-smi">password</span>)</div><div class='line js-file-line' id='LC39'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="pl-k">const</span> <span class="pl-c1">account</span> <span class="pl-k">=</span> <span class="pl-k">await</span> <span class="pl-smi">session</span>.<span class="pl-en">getAccount</span>();</div><div class='line js-file-line' id='LC40'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="pl-k">return</span> <span class="pl-c1">Promise</span>.<span class="pl-c1">resolve</span>({session,account});</div><div class='line js-file-line' id='LC41'>&nbsp;&nbsp;&nbsp;&nbsp;} <span class="pl-k">catch</span> (err) {</div><div class='line js-file-line' id='LC42'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="pl-k">return</span> <span class="pl-c1">Promise</span>.<span class="pl-c1">reject</span>(err);</div><div class='line js-file-line' id='LC43'>&nbsp;&nbsp;&nbsp;&nbsp;}</div><div class='line js-file-line' id='LC44'><br></div><div class='line js-file-line' id='LC45'>}</div><div class='line js-file-line' id='LC46'><br></div><div class='line js-file-line' id='LC47'><span class="pl-k">const</span> <span class="pl-c1">Timeline</span> <span class="pl-k">=</span> <span class="pl-k">async</span> <span class="pl-k">function</span>(<span class="pl-smi">session</span>,<span class="pl-smi">count</span>,<span class="pl-smi">cursor</span>){</div><div class='line js-file-line' id='LC48'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="pl-k">var</span> getCursor;</div><div class='line js-file-line' id='LC49'>&nbsp;&nbsp;&nbsp;&nbsp;count<span class="pl-k">++</span>;</div><div class='line js-file-line' id='LC50'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="pl-c"><span class="pl-c">/**</span> New Feed *<span class="pl-c">*/</span></span></div><div class='line js-file-line' id='LC51'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="pl-k">const</span> <span class="pl-c1">feed</span> <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Client.Feed.Timeline</span>(session);</div><div class='line js-file-line' id='LC52'>&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line js-file-line' id='LC53'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="pl-c"><span class="pl-c">/**</span> Cursor Detect *<span class="pl-c">*/</span></span></div><div class='line js-file-line' id='LC54'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="pl-k">if</span> (cursor) {</div><div class='line js-file-line' id='LC55'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="pl-smi">feed</span>.<span class="pl-c1">setCursor</span>(cursor);</div><div class='line js-file-line' id='LC56'>&nbsp;&nbsp;&nbsp;&nbsp;}</div><div class='line js-file-line' id='LC57'><br></div><div class='line js-file-line' id='LC58'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="pl-k">try</span> {</div><div class='line js-file-line' id='LC59'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="pl-k">const</span> <span class="pl-c1">media</span> <span class="pl-k">=</span> <span class="pl-k">await</span> <span class="pl-smi">feed</span>.<span class="pl-c1">get</span>();</div><div class='line js-file-line' id='LC60'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="pl-en">console</span>.<span class="pl-c1">log</span>(<span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-cce">\n</span>[+] Cursor =&gt; %s<span class="pl-cce">\n</span><span class="pl-pds">&#39;</span></span>, count);</div><div class='line js-file-line' id='LC61'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="pl-k">await</span> <span class="pl-c1">Promise</span>.<span class="pl-c1">all</span>(<span class="pl-smi">media</span>.<span class="pl-en">map</span>(<span class="pl-k">async</span>(media) <span class="pl-k">=&gt;</span> {</div><div class='line js-file-line' id='LC62'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="pl-en">Like</span>(session,media);</div><div class='line js-file-line' id='LC63'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}));</div><div class='line js-file-line' id='LC64'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="pl-k">if</span> (count <span class="pl-k">&lt;</span> <span class="pl-c1">3</span>) {</div><div class='line js-file-line' id='LC65'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;getCursor <span class="pl-k">=</span> <span class="pl-k">await</span> <span class="pl-smi">feed</span>.<span class="pl-en">getCursor</span>();</div><div class='line js-file-line' id='LC66'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="pl-k">await</span> <span class="pl-en">Timeline</span>(session,count,getCursor);</div><div class='line js-file-line' id='LC67'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} <span class="pl-k">else</span> {</div><div class='line js-file-line' id='LC68'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="pl-en">console</span>.<span class="pl-c1">log</span>(<span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-cce">\n</span>[-] Repeat from scratch (Delay 60s)<span class="pl-cce">\n</span><span class="pl-pds">&#39;</span></span>);</div><div class='line js-file-line' id='LC69'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="pl-k">await</span> <span class="pl-en">delay</span>(<span class="pl-c1">60000</span>);</div><div class='line js-file-line' id='LC70'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;count<span class="pl-k">=</span><span class="pl-c1">0</span>;</div><div class='line js-file-line' id='LC71'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="pl-k">await</span> <span class="pl-en">Timeline</span>(session,count);</div><div class='line js-file-line' id='LC72'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</div><div class='line js-file-line' id='LC73'>&nbsp;&nbsp;&nbsp;&nbsp;} <span class="pl-k">catch</span>(err) {</div><div class='line js-file-line' id='LC74'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="pl-k">return</span> <span class="pl-c1">Promise</span>.<span class="pl-c1">reject</span>(err);</div><div class='line js-file-line' id='LC75'>&nbsp;&nbsp;&nbsp;&nbsp;}</div><div class='line js-file-line' id='LC76'><br></div><div class='line js-file-line' id='LC77'>}</div><div class='line js-file-line' id='LC78'><br></div><div class='line js-file-line' id='LC79'><span class="pl-k">const</span> <span class="pl-c1">Like</span> <span class="pl-k">=</span> <span class="pl-k">async</span> <span class="pl-k">function</span>(<span class="pl-smi">session</span>,<span class="pl-smi">media</span>){</div><div class='line js-file-line' id='LC80'><br></div><div class='line js-file-line' id='LC81'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="pl-k">try</span> {</div><div class='line js-file-line' id='LC82'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="pl-k">if</span> (<span class="pl-smi">media</span>.<span class="pl-smi">params</span>.<span class="pl-smi">hasLiked</span> <span class="pl-k">===</span> <span class="pl-c1">false</span>){</div><div class='line js-file-line' id='LC83'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="pl-k">const</span> <span class="pl-c1">Like</span> <span class="pl-k">=</span> <span class="pl-k">await</span> <span class="pl-smi">Client</span>.<span class="pl-smi">Like</span>.<span class="pl-en">create</span>(session, <span class="pl-smi">media</span>.<span class="pl-smi">params</span>.<span class="pl-c1">id</span>);</div><div class='line js-file-line' id='LC84'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="pl-en">console</span>.<span class="pl-c1">log</span>(chalk<span class="pl-s"><span class="pl-pds">`</span>[{bold.cyan <span class="pl-s1"><span class="pl-pse">${</span><span class="pl-smi">media</span>.<span class="pl-c1">id</span><span class="pl-pse">}</span></span>}] Username : <span class="pl-s1"><span class="pl-pse">${</span><span class="pl-smi">media</span>.<span class="pl-smi">params</span>.<span class="pl-smi">user</span>.<span class="pl-smi">username</span><span class="pl-pse">}</span></span> =&gt; {bold.green Liked}<span class="pl-pds">`</span></span>);</div><div class='line js-file-line' id='LC85'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} <span class="pl-k">else</span> {</div><div class='line js-file-line' id='LC86'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="pl-en">console</span>.<span class="pl-c1">log</span>(chalk<span class="pl-s"><span class="pl-pds">`</span>[{bold.cyan <span class="pl-s1"><span class="pl-pse">${</span><span class="pl-smi">media</span>.<span class="pl-c1">id</span><span class="pl-pse">}</span></span>}] Username : <span class="pl-s1"><span class="pl-pse">${</span><span class="pl-smi">media</span>.<span class="pl-smi">params</span>.<span class="pl-smi">user</span>.<span class="pl-smi">username</span><span class="pl-pse">}</span></span> =&gt; {bold.red Already Liked}<span class="pl-pds">`</span></span>);</div><div class='line js-file-line' id='LC87'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</div><div class='line js-file-line' id='LC88'>&nbsp;&nbsp;&nbsp;&nbsp;} <span class="pl-k">catch</span> (err) {</div><div class='line js-file-line' id='LC89'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="pl-k">return</span> <span class="pl-c1">Promise</span>.<span class="pl-c1">reject</span>(err);</div><div class='line js-file-line' id='LC90'>&nbsp;&nbsp;&nbsp;&nbsp;}</div><div class='line js-file-line' id='LC91'><br></div><div class='line js-file-line' id='LC92'>}</div><div class='line js-file-line' id='LC93'><br></div><div class='line js-file-line' id='LC94'><span class="pl-k">const</span> <span class="pl-c1">Excute</span> <span class="pl-k">=</span> <span class="pl-k">async</span> <span class="pl-k">function</span>(<span class="pl-smi">User</span>){</div><div class='line js-file-line' id='LC95'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="pl-k">try</span> {</div><div class='line js-file-line' id='LC96'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="pl-k">const</span> <span class="pl-c1">count</span> <span class="pl-k">=</span> <span class="pl-c1">0</span>;</div><div class='line js-file-line' id='LC97'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="pl-k">const</span> <span class="pl-c1">doLogin</span> <span class="pl-k">=</span> <span class="pl-k">await</span> <span class="pl-en">Login</span>(User);</div><div class='line js-file-line' id='LC98'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="pl-k">await</span> <span class="pl-en">Timeline</span>(<span class="pl-smi">doLogin</span>.<span class="pl-smi">session</span>,count);</div><div class='line js-file-line' id='LC99'>&nbsp;&nbsp;&nbsp;&nbsp;} <span class="pl-k">catch</span> (err) {</div><div class='line js-file-line' id='LC100'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="pl-en">console</span>.<span class="pl-c1">log</span>(err);</div><div class='line js-file-line' id='LC101'>&nbsp;&nbsp;&nbsp;&nbsp;}</div><div class='line js-file-line' id='LC102'>}</div><div class='line js-file-line' id='LC103'><span class="pl-en">console</span>.<span class="pl-c1">log</span>(chalk<span class="pl-s"><span class="pl-pds">`</span></span></div><div class='line js-file-line' id='LC104'><span class="pl-s">  {bold.cyan</span></div><div class='line js-file-line' id='LC105'><span class="pl-s">  —————————————————— [INFORMATION] ————————————————————</span></div><div class='line js-file-line' id='LC106'><span class="pl-s"></span></div><div class='line js-file-line' id='LC107'><span class="pl-s">  [?] {bold.green BOTLIKEv2 | Like/Love TL IG *AUTO!}</span></div><div class='line js-file-line' id='LC108'><span class="pl-s"></span></div><div class='line js-file-line' id='LC109'><span class="pl-s">  ——————————————————  [THANKS TO]  ————————————————————</span></div><div class='line js-file-line' id='LC110'><span class="pl-s">  [✓] CODE BY CYBER SCREAMER CCOCOT (ccocot@bc0de.net)</span></div><div class='line js-file-line' id='LC111'><span class="pl-s">  [✓] FIXING &amp; TESTING BY SYNTAX (@teamsyntaxid)</span></div><div class='line js-file-line' id='LC112'><span class="pl-s">  [✓] CCOCOT.CO | BC0DE.NET | NAONLAH.NET | WingkoColi</span></div><div class='line js-file-line' id='LC113'><span class="pl-s">  [✓] SGB TEAM REBORN | Zerobyte.id | ccocot@bc0de.net </span></div><div class='line js-file-line' id='LC114'><span class="pl-s">  —————————————————————————————————————————————————————}</span></div><div class='line js-file-line' id='LC115'><span class="pl-s">      <span class="pl-pds">`</span></span>);</div><div class='line js-file-line' id='LC116'><br></div><div class='line js-file-line' id='LC117'><span class="pl-smi">inquirer</span>.<span class="pl-c1">prompt</span>(User)</div><div class='line js-file-line' id='LC118'>.<span class="pl-c1">then</span>(<span class="pl-smi">answers</span> <span class="pl-k">=&gt;</span> {</div><div class='line js-file-line' id='LC119'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="pl-en">Excute</span>({</div><div class='line js-file-line' id='LC120'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;username<span class="pl-k">:</span><span class="pl-smi">answers</span>.<span class="pl-smi">username</span>,</div><div class='line js-file-line' id='LC121'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;password<span class="pl-k">:</span><span class="pl-smi">answers</span>.<span class="pl-smi">password</span></div><div class='line js-file-line' id='LC122'>&nbsp;&nbsp;&nbsp;&nbsp;});</div><div class='line js-file-line' id='LC123'>})</div></pre></div></div>
    </div>
</div>


  <footer class="clearfix">
    <div class="container">
      <a href="#"><svg height="32" class="octicon octicon-mark-github" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg></a>

      <ul class="clearfix">
        <li>
          <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="js-mobile-preference-form" action="/site/mobile_preference" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="egFdoNTfUkY1TTpJE0G2wv3wVihjxOa0jMjeNJISlayKgfgwxtlMdgQx7BbYyiu4Uf8v83qPIBAL5Ecm2lTH/g==" />
            <input type="hidden" name="mobile" value="false">
            <input type="hidden" name="anchor" class="js-mobile-preference-anchor-field">

            <button type="submit" class="switch-to-desktop" data-ga-click="Mobile, switch to desktop, switch button">
              Desktop version
            </button>
</form>        </li>
        <li>
          <a href="/logout" data-ga-click="Mobile, tap, location:header; text:Sign out">
            Sign out
          </a>
        </li>
      </ul>
    </div>
  </footer>
  
    <script crossorigin="anonymous" async="async" integrity="sha512-BbHwdjroqmazykuOqcQ/Wv6P7o/vx/36UTtiCKzA0PjX3l+0CSCGFDGJzf4/KoWIozvnJwJCog63hUgVJc0wuA==" type="application/javascript" src="https://github.githubassets.com/assets/mobile-a2e7a009cc8d03e4095735d7e8214d5e.js"></script>

  </body>
</html>
