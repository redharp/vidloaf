export interface IRedditResponse {
    kind?: string;
    data?: IRedditResponseData;
}
export interface IRedditResponseData {
    modhash?: string;
    dist?: number;
    children?: IRedditPost[];
    after?: string;
    before?: string;
}

export interface IRedditPost {
    kind?: string;
    data?: IData;
}

export interface IMediaEmbed {
    content?: string;
    width?: number;
    scrolling?: boolean;
    height?: number;
}

export interface IOembed {
    provider_url?: string;
    title?: string;
    type?: string;
    html?: string;
    thumbnail_width?: number;
    height?: number;
    width?: number;
    version?: string;
    author_name?: string;
    provider_name?: string;
    thumbnail_url?: string;
    thumbnail_height?: number;
    author_url?: string;
}

export interface ISecureMedia {
    type?: string;
    oembed?: IOembed;
}

export interface ISecureMediaEmbed {
    content?: string;
    width?: number;
    scrolling?: boolean;
    media_domain_url?: string;
    height?: number;
}

export interface IGilding {
    gid_1?: number;
    gid_2?: number;
    gid_3?: number;
}

export interface ISource {
    url?: string;
    width?: number;
    height?: number;
}

export interface IResolution {
    url?: string;
    width?: number;
    height?: number;
}

export interface IVariant { }

export interface Iimage {
    source?: ISource;
    resolutions?: IResolution[];
    variants?: IVariant;
    id?: string;
}

export interface IPreview {
    images?: Iimage[];
    enabled?: boolean;
}

export interface IOembed {
    provider_url?: string;
    title?: string;
    type?: string;
    html?: string;
    thumbnail_width?: number;
    height?: number;
    width?: number;
    version?: string;
    author_name?: string;
    provider_name?: string;
    thumbnail_url?: string;
    thumbnail_height?: number;
    author_url?: string;
}

export interface IMedia {
    type?: string;
    oembed?: IOembed;
}

export interface IData {
    approved_at_utc?: any;
    subreddit?: string;
    selftext?: string;
    author_fullname?: string;
    saved?: boolean;
    mod_reason_title?: any;
    gilded?: number;
    clicked?: boolean;
    title?: string;
    link_flair_richtext?: any[];
    subreddit_name_prefixed?: string;
    hidden?: boolean;
    pwls?: number;
    link_flair_css_class?: any;
    downs?: number;
    thumbnail_height?: number;
    hide_score?: boolean;
    name?: string;
    quarantine?: boolean;
    link_flair_text_color?: string;
    author_flair_background_color?: any;
    subreddit_type?: string;
    ups?: number;
    domain?: string;
    media_embed?: IMediaEmbed;
    thumbnail_width?: number;
    author_flair_template_id?: any;
    is_original_content?: boolean;
    user_reports?: any[];
    secure_media?: ISecureMedia;
    is_reddit_media_domain?: boolean;
    is_meta?: boolean;
    category?: any;
    secure_media_embed?: ISecureMediaEmbed;
    link_flair_text?: any;
    can_mod_post?: boolean;
    score?: number;
    approved_by?: any;
    thumbnail?: string;
    edited?: boolean;
    author_flair_css_class?: any;
    author_flair_richtext?: any[];
    gildings?: IGilding;
    post_hint?: string;
    content_categories?: any;
    is_self?: boolean;
    mod_note?: any;
    created?: number;
    link_flair_type?: string;
    wls?: number;
    banned_by?: any;
    author_flair_type?: string;
    contest_mode?: boolean;
    selftext_html?: any;
    likes?: any;
    suggested_sort?: any;
    banned_at_utc?: any;
    view_count?: any;
    archived?: boolean;
    no_follow?: boolean;
    is_crosspostable?: boolean;
    pinned?: boolean;
    over_18?: boolean;
    preview?: IPreview;
    media_only?: boolean;
    can_gild?: boolean;
    spoiler?: boolean;
    locked?: boolean;
    author_flair_text?: any;
    visited?: boolean;
    num_reports?: any;
    distinguished?: any;
    subreddit_id?: string;
    mod_reason_by?: any;
    removal_reason?: any;
    link_flair_background_color?: string;
    id?: string;
    is_robot_indexable?: boolean;
    report_reasons?: any;
    author?: string;
    num_crossposts?: number;
    num_comments?: number;
    send_replies?: boolean;
    whitelist_status?: string;
    mod_reports?: any[];
    author_patreon_flair?: boolean;
    author_flair_text_color?: any;
    permalink?: string;
    parent_whitelist_status?: string;
    stickied?: boolean;
    url?: string;
    subreddit_subscribers?: number;
    created_utc?: number;
    media?: IMedia;
    is_video?: boolean;
}
